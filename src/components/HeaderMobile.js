import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import HamburgerMenuIcon from '../images/hamburgerMenu.svg';

const styles = {
 root: {
   backgroundColor: 'rgba(252, 228, 236, 0.95)',
   borderBottom: '1px solid rgba(233, 30, 99, 0.4)',
   display: 'none',
   height: 45,
 },
 links: {
   paddingLeft: 40,
   display: 'flex',
   flexDirection: 'row',
   flex: 1,
   justifyContent: 'center',
   gap: 12,
 },
 title: {
   display: 'flex',
   alignItems: 'center',
   fontSize: 20,
   fontFamily: "'IBM Plex Sans', 'PT Sans', 'Open Sans', 'Roboto', sans-serif",
   fontWeight: 600,
 },
 link: { 
   color: '#e91e63',
   textDecoration: 'none'
 },
 expanded: {
   position: 'absolute',
   top: 8,
   left: 59,
   width: 150,
   height: 250,
   backgroundColor: 'rgb(248, 187, 208)',
   borderStyle: 'solid',
   borderWidth: 1,
   borderBottomWidth: 0,
   borderColor: 'rgba(233, 30, 99, 0.4)',
   textAlign: 'center',
   display: 'flex',
   flex: 1,
   flexDirection: 'column',
   justifyContent: 'space-around',
   alignItems: 'center',
   zIndex: 200,
 },
 expandedLink: {
   display: 'flex',
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
   fontSize: 20,
   borderBottomStyle: 'solid',
   borderBottomWidth: 1,
   borderBottomColor: 'rgba(233, 30, 99, 0.4)',
   textAlign: 'center',
 },
 menuIcon: {
   position: 'absolute',
   cursor: 'pointer',
   left: 7,
   top: 4,
   zIndex: 10,
 },
};

const ExpandedLink = ({ to, text, style = {} }) => (
 <Link to={to} style={{ ...styles.expandedLink, ...style }}>
   {text}
 </Link>
);

const HeaderMenuExpanded = () => (
 <div style={styles.expanded}>
   <ExpandedLink to="/" text="Home" />
   <ExpandedLink to="/portfolio/" text="Portfolio" />
   <ExpandedLink to="/contact/" text="Contact" />
   <ExpandedLink to="/blog/" text="Blog" />
   <ExpandedLink
     to="/professional/"
     text="Professional Experience"
     style={{ flex: 1.5 }}
   />
 </div>
);

const HeaderMobile = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 
 const hideMenu = (evt) => {
   if (!(evt.target.className || '').toString().includes('menu-activator')) {
     setMenuOpen(false);
   }
 };

 useEffect(() => {
   document.addEventListener('click', hideMenu);

   return () => {
     document.removeEventListener('click', hideMenu);
   };
 });

 return (
   <div style={styles.root} className="header-mobile">
     <img
       className="menu-activator"
       height={38}
       width={38}
       src={HamburgerMenuIcon}
       alt="hamburger menu icon"
       style={styles.menuIcon}
       onClick={() => setMenuOpen(!menuOpen)}
     />
     <div style={styles.links}>
       <div style={styles.title}>
         <Link style={{ ...styles.link, marginRight: 10 }} to="/">
           heyiamsra.com
         </Link>
       </div>
       <div style={styles.title}>{' | '}</div>
       <div style={styles.title}>
         <a
           style={{ ...styles.link, marginLeft: 10 }}
           href="https://x.com/heyiamsra"
           target="blank"
         >
           @heyiamsra
         </a>
       </div>
     </div>

     {menuOpen ? <HeaderMenuExpanded /> : null}
   </div>
 );
};

export default React.memo(HeaderMobile);