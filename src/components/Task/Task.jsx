import { MdClose } from 'react-icons/md';
import { Btn, Text, Wrapper } from './Task.styled';
import { useDispatch } from 'react-redux';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <input
        onChange={() => console.log(task.id)}
        type="checkbox"
        checked={task.completed}
      />
      <Text>{task.text}</Text>
      <Btn onClick={() => console.log(task.id)}>
        <MdClose size={24} />
      </Btn>
    </Wrapper>
  );
};
