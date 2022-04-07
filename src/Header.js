import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './img/logo.svg';

const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  padding-top: 2em;
  padding-left: 5em;
`;

const Nav = styled.nav`
  display: flex;
  margin-left: auto;
`;

const NavLink = styled(Link)`
  padding-top: 0.5em;
  padding-left: 2.5em;
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
