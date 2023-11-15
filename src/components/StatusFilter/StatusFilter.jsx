import { Button } from 'components/Button/Button';
import { Wrapper } from './StatusFilter.styled';
import { STATUSFILTERS } from '../../redux/constants';
import { selectFilter } from 'redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filtersSlice';

export const StatusFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button
        type="button"
        onClick={() => dispatch(setFilter('all'))}
        selected={filter === STATUSFILTERS.all}
      >
        All
      </Button>
      <Button
        type="button"
        onClick={() => dispatch(setFilter('active'))}
        selected={filter === STATUSFILTERS.active}
      >
        Active
      </Button>
      <Button
        type="button"
        onClick={() => dispatch(setFilter('completed'))}
        selected={filter === STATUSFILTERS.completed}
      >
        Completed
      </Button>
    </Wrapper>
  );
};
