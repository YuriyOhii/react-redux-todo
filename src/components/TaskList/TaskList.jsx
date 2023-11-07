import { Task } from 'components/Task/Task';
import { List, ListItem } from './TaskList.styled';
import { selectItems, selectFilter } from '../../redux/selectors';
import { STATUSFILTERS } from '../../redux/constants';
import { useSelector } from 'react-redux';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case STATUSFILTERS.active:
      return tasks.filter(el => !el.completed);
    case STATUSFILTERS.completed:
      return tasks.filter(el => el.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const filter = useSelector(selectFilter);
  const tasks = useSelector(selectItems);
  const shownTasks = getVisibleTasks(tasks, filter);
  return (
    <List>
      {shownTasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
};
