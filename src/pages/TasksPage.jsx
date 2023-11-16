import { TaskBar } from 'components/TaskBar/TaskBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';

export default function TasksPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('fetching tasks');
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      <TaskBar />
      <TaskForm />
      <TaskList />
    </div>
  );
}
