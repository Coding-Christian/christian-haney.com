import React from 'react';
import CSSTransitionGroup from 'react-transition-group';

function Header(props) {
  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='d-flex'>
          <span className='navbar-brand h1'>{'</>'} Christian Haney</span>
          <span className='navbar-nav flex-row'>
            <a href="#" className='nav-item nav-link mx-4'>Home</a>
            <a href="#" className='nav-item nav-link mx-4'>Projects</a>
            <a href="#" className='nav-item nav-link mx-4'>About Me</a>
        </span>
      </div>
      <span className='navbar-text'>
        Full Stack - JavaScript/React | PHP | SQL | HTML | CSS
      </span>
    </nav>
  );
}

export default Header;
