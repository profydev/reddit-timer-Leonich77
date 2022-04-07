import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './img/logo.svg';

const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  padding: 1em;
`;

const Nav = styled.nav`
  display: flex;
  margin-left: auto;
`;

const NavLink = styled(Link)`
    padding: 0.5em;
`;

export default function Header() {
  return (
    <HeaderBox>
      <Link to="/"><Logo /></Link>
      <Nav>
        <NavLink to="/search/javascript">Search</NavLink>
        <NavLink to="#how-it-works">How it works</NavLink>
        <NavLink to="#about">About</NavLink>
      </Nav>
    </HeaderBox>
  );
}
