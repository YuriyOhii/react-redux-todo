import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectError, selectIsLoading } from 'redux/tasks/selectors';

export const App = () => {
  const HomePage = lazy(() => import('../pages/HomePage'));
  const RegisterPage = lazy(() => import('../pages/RegisterPage'));
  const LogInPage = lazy(() => import('../pages/LogInPage'));
  const TasksPage = lazy(() => import('../pages/TasksPage'));
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {dispatch(fetchTasks())}, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
