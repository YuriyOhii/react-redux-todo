import { MdClose } from 'react-icons/md';
import { Btn, Text, Wrapper } from './Task.styled';

export const Task = ({ task }) => {
  return (
    <Wrapper>
      <input type="checkbox" checked={task.completed} />
      <Text>{task.text}</Text>
      <Btn>
        <MdClose size={24} />
      </Btn>
    </Wrapper>
  );
};
