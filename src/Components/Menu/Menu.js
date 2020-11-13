import React from 'react';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">Home</Link>
      <Link to="/install">Install</Link>
      <Link to="/documentation">Documentation</Link>
      <Link to="/contribute">Contribute</Link>
    </StyledMenu>
  );
};
