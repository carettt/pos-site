import React from 'react';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

export const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        Home
      </Link>
      <Link to="/install" onClick={() => setOpen(!open)}>
        Install
      </Link>
      <Link to="/documentation" onClick={() => setOpen(!open)}>
        Documentation
      </Link>
      <Link to="/contribute" onClick={() => setOpen(!open)}>
        Contribute
      </Link>
    </StyledMenu>
  );
};
