import { FaUser } from "react-icons/fa";
import { Wrap } from "./UserMenu.styled";

export const UserMenu = () => {
    return <Wrap>
      <p>Hello! <FaUser/></p>
      <button type="button">LogOut</button>
    </Wrap>;
  };