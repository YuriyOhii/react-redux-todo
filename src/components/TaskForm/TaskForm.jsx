import { Button } from 'components/Button/Button';
import { Field, Form } from './TaskForm.styled';
import { useDispatch } from 'react-redux';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    form.reset();
  };

  return (
    <Form onSubmit={() => console.log('submit')}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </Form>
  );
};
