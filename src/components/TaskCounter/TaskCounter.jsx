import { Text } from './TaskCounter.styled';
import { selectItems } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
  const tasks = useSelector(selectItems);
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
    </div>
  );
};
