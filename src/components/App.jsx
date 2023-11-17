import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { reFreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { PrivateRoute } from './PrivateRoute';
import { ReestrictedRoute } from './RestrictedRoute';
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));
const TasksPage = lazy(() => import('../pages/TasksPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reFreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/tasks"
          element={
            <PrivateRoute component={<TasksPage />} redirectTo="/login" />
          }
        />
        <Route
          path="/register"
          element={
            <ReestrictedRoute
              component={<RegisterPage />}
              redirectTo="/tasks"
            />
          }
        />
        <Route
          path="/login"
          element={
            <ReestrictedRoute component={<LogInPage />} redirectTo="/tasks" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
