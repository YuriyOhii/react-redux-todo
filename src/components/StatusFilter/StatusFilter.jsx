import { Button } from 'components/Button/Button';
import { Wrapper } from './StatusFilter.styled';
import { STATUSFILTERS } from '../../redux/constants';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const StatusFilter = () => {
  const filter = useSelector(selectFilter);
  return (
    <Wrapper>
      <Button
        type="button"
        onClick={() => console.log('all')}
        selected={filter === STATUSFILTERS.all}
      >
        All
      </Button>
      <Button
        type="button"
        onClick={() => console.log('active')}
        selected={filter === STATUSFILTERS.active}
      >
        Active
      </Button>
      <Button
        type="button"
        onClick={() => console.log('completed')}
        selected={filter === STATUSFILTERS.completed}
      >
        Completed
      </Button>
    </Wrapper>
  );
};
