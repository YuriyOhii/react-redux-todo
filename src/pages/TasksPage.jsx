import { TaskBar } from 'components/AppBar/TaskBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

export default function TasksPage() {
  return (
    <div>
      <TaskBar />
      <TaskForm />
      <TaskList />
    </div>
  );
}
