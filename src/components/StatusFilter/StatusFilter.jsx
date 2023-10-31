import { Button } from 'components/Button/Button';
import { Wrapper } from './StatusFilter.styled';
import { STATUSFILTERS } from '../../redux/constants';
import { useSelector } from 'react-redux';

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  console.log(STATUSFILTERS.all);
  return (
    <Wrapper>
      <Button selected={filter === STATUSFILTERS.all}>All</Button>
      <Button selected={filter === STATUSFILTERS.active}>Active</Button>
      <Button selected={filter === STATUSFILTERS.completed}>Completed</Button>
    </Wrapper>
  );
};
