import { Layout } from 'components/Layout/Layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/options';
import { getTasks } from 'redux/selectors';
// import { AppBar } from "components/AppBar/AppBar";
// import { TaskForm } from "components/TaskForm/TaskForm";
// import { TaskList } from "components/TaskList/TaskList";

export const App = () => {
  const dispatch = useDispatch();
  const {items, error, isLoading} = useSelector(getTasks);
  useEffect(()=>{
    console.log('App starts')
  dispatch(fetchTasks())
  }, [dispatch])
  return (
    <Layout>
      {isLoading && <p>Loading....</p>}
      {error && <p>Error. {error}</p>}
      <p>{JSON.stringify(items, null, 2)}</p>
    </Layout>
  )
}
