import { MdClose } from 'react-icons/md';
import { Btn, Text, Wrapper } from './Task.styled';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleChange = taskId => {
    dispatch(toggleCompleted(taskId));
  };
  const handleClick = taskId => {
    dispatch(deleteTask(taskId));
  };
  return (
    <Wrapper>
      <input
        onChange={() => handleChange(task.id)}
        type="checkbox"
        checked={task.completed}
      />
      <Text>{task.text}</Text>
      <Btn onClick={() => handleClick(task.id)}>
        <MdClose size={24} />
      </Btn>
    </Wrapper>
  );
};
