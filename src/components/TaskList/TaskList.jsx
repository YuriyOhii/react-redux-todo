import { Task } from 'components/Task/Task';
import { List, ListItem } from './TaskList.styled';
import { selectVisibleTasks } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);
  return (
    <List>
      {visibleTasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
};
