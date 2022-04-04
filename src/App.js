import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './img/logo.svg';

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
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
  text-decoration: none;
`;

function App() {
  return (
    <AppWrap>
      <Header>
        <Link to="/"><Logo /></Link>
        <Nav>
          <NavLink to="/search/javascript">Search</NavLink>
          <NavLink to="#how-it-works">How it works</NavLink>
          <NavLink to="#about">About</NavLink>
        </Nav>
      </Header>
    </AppWrap>
  );
}

export default App;
