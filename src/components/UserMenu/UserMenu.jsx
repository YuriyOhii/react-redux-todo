import { FaUser } from 'react-icons/fa';
import { Wrap } from './UserMenu.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();
  return (
    <Wrap>
      <p>
        Hello! <FaUser /> {username}
      </p>
      <Button onClick={() => dispatch(logOut())} type="button">
        LogOut
      </Button>
    </Wrap>
  );
};
