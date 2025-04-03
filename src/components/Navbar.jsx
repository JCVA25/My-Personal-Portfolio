import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Nav = styled.nav`
  padding: 1.5rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background: transparent;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3436;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    width: 35px;
    height: 35px;
    background: #ff6b6b;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 0.5rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  a {
    color: #2d3436;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #ff6b6b;
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContent>
        <Logo to="/">
          <span>JC</span>
        </Logo>
        <NavList>
          <NavItem
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link to="/projects">Projects</Link>
          </NavItem>
          <NavItem
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link to="/contact">Contact</Link>
          </NavItem>
        </NavList>
      </NavContent>
    </Nav>
  );
};

export default Navbar; 