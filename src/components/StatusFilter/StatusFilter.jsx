import { Button } from 'components/Button/Button';
import { Wrapper } from './StatusFilter.styled';
import { STATUSFILTERS } from '../../redux/constants';
import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFiltersStatus } from 'redux/actions';

export const StatusFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleClick = data => {
    dispatch(setFiltersStatus(data));
  };
  return (
    <Wrapper>
      <Button
        type="button"
        onClick={() => handleClick('all')}
        selected={filter === STATUSFILTERS.all}
      >
        All
      </Button>
      <Button
        type="button"
        onClick={() => handleClick('active')}
        selected={filter === STATUSFILTERS.active}
      >
        Active
      </Button>
      <Button
        type="button"
        onClick={() => handleClick('completed')}
        selected={filter === STATUSFILTERS.completed}
      >
        Completed
      </Button>
    </Wrapper>
  );
};
