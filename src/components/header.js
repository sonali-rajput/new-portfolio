import React from 'react';
import { Link } from 'gatsby';

import './Header.css';

/* JavaScript object containing inline styles for header layout */
const styles = {
  /* Main container for the entire header */
  root: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'transparent', 
    flexWrap: 'wrap', 
    maxWidth: 880, 
    marginLeft: 'auto', 
    marginRight: 'auto',
    marginBottom: 6, 
    paddingLeft: 8,
    paddingRight: 2, 
  },
  /* Container for navigation links on the right side */
  navLinks: {
    display: 'flex', 
    flex: 1, 
    justifyContent: 'flex-end', 
    marginTop: 2,
    textDecorationThickness: 1, 
    textUnderlineOffset: 2, 
  },
};

/* Component that creates individual navigation links */
const NavLink = ({ to, text, style = {} }) => (
  /* Link component with nav-link CSS class and optional custom styles */
  <Link className="nav-link" to={to} style={style}>
    {text}
  </Link>
);

/* Component that creates the group of navigation links */
const NavLinks = () => (
  /* Container div with navLinks styling */
  <div style={styles.navLinks}>
    <a
      href="https://x.com/heyiamsra" 
      target="blank"
      className="nav-link"
    >
      @heyiamsra
    </a>
    •
    <NavLink to="/portfolio/" text="Portfolio" />•
    <NavLink to="/contact/" text="Contact" />•
    <NavLink to="/blog/" text="Blog" />•
    <NavLink
      to="/professional/"
      text="Professional Experience"
      style={{ flexBasis: 215 }}
    />
  </div>
);

/* Main Header component that combines home link and navigation */
const Header = () => (
  <div style={styles.root} className="header">
    <Link to="/" className="home-link">
      <b>heyiamsra.com</b>
    </Link>
    <NavLinks />
  </div>
);
export default Header;