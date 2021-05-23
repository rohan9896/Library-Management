import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"

function NavBar() {

  const {currentUser, logout} = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="NavBar">
      <ul className="NavBar__routes">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/author">AUTHORS</Link>
        </li>
        <li>
          <Link to="book">BOOKS</Link>
        </li>
      </ul>
      <span className="NavBar__loginLogout">
        {
          currentUser ? 
          <Menu>
            <MenuButton as="button">Hello, User</MenuButton>
            <MenuList color="black">
              <MenuItem>Profile(not working yet)</MenuItem>
              <MenuItem onClick={handleLogout}>LogOut</MenuItem>
            </MenuList>
          </Menu>
          : 
          <Link to="/login">Login</Link>
        }
      </span>
    </div>
  );
}

export default NavBar;
