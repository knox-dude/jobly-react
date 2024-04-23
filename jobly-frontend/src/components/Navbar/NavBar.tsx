import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function NavBar() {
  const args = {
    color: 'dark',
    light: false,
    dark: true,
    expand: "md",
    fixed: "top",
    toggle: "true",
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/companies/">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/companies/apple">
                Apple Company
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/jobs">
                Jobs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">
                Signup
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">
                Profile
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;