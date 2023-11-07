import { MdClose } from 'react-icons/md';
import { Btn, Text, Wrapper } from './Task.styled';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleIsCompleted } from 'redux/operations';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleClick = id => {
    dispatch(deleteTask(id));
  };
  const handleChange = task => {
    dispatch(toggleIsCompleted(task));
  };
  return (
    <Wrapper>
      <input
        onChange={() => handleChange(task)}
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
