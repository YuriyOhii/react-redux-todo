import { Task } from 'components/Task/Task';
import { List, ListItem } from './TaskList.styled';
import { getTasks, getFilter } from '../../redux/selectors';
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
  const filter = useSelector(getFilter);
  const tasks = useSelector(getTasks);
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
