import { MdClose } from 'react-icons/md';
import { Btn, Text, Wrapper } from './Task.styled';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/operations';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleClick = id => {
    dispatch(deleteTask(id));
  };

  return (
    <Wrapper>
      <input
        onChange={() => console.log(task.id)}
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
