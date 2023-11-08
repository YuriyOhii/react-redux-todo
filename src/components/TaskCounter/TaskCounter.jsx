import { Text } from './TaskCounter.styled';
import { selectTasksCount } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
  const count = useSelector(selectTasksCount);
  return (
    <div>
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
    </div>
  );
};
