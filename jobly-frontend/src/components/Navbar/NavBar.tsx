import { useState, useContext, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import TokenContext from "../TokenContext/TokenContext";
import {jwtDecode} from "jwt-decode"

type decodedToken = {iat: number, isAdmin: boolean, username: string}

function NavBar() {
  const args = {
    color: "dark",
    light: false,
    dark: true,
    expand: "md",
    fixed: "top",
    toggle: "true",
  };

  // state for toggling of navigation bar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  const [username, setUsername] = useState<string | null>(null);

  // get token from context provider
  const [token,] = useContext(TokenContext);

  // decode token and set username if token exists
  useEffect(() => {
    if (token) {
      // get username from decoded token and set it
      setUsername(jwtDecode<decodedToken>(token).username);
    } else {
      console.log("no token");
    }
  }, [username, token])

  const renderNavBasedOnToken = () => {
    if (token) {
      return (
        <>
          <NavItem>
            <NavLink tag={Link} to="/profile">
              {username}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/logout">
              Logout
            </NavLink>
          </NavItem>
        </>
      );
    } else {
      return (
        <>
          <NavItem>
            <NavLink tag={Link} to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signup">
              Signup
            </NavLink>
          </NavItem>
        </>
      );
    }
  }

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar onClick={() => setIsOpen(false)}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/companies/">
                Companies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/jobs">
                Jobs
              </NavLink>
            </NavItem>
            {renderNavBasedOnToken()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
