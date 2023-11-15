import { FaUser } from 'react-icons/fa';
import { Wrap } from './UserMenu.styled';
import { Button } from 'components/Button/Button';

export const UserMenu = () => {
  return (
    <Wrap>
      <p>
        Hello! <FaUser />
      </p>
      <Button type="button">LogOut</Button>
    </Wrap>
  );
};
