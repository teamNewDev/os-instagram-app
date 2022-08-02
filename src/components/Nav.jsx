import React from 'react';
import instagramLogo from '../assets/instagram.png';

const Nav = () => {
  return (
    <nav>
      <button className='logo'>
        <img src={instagramLogo} alt='logo' />
      </button>
      <input type='text' className='search' placeholder='Search...' />
      <span className='nav-links'>
        <button>
          <i className='fas fa-home nav-icon'></i>
        </button>
        <button>
          <i className='fas fa-comment-alt nav-icon'></i>
        </button>
        <button>
          <i className='fas fa-compass nav-icon'></i>
        </button>
        <button>
          <i className='fas fa-heart nav-icon'></i>
        </button>
      </span>
    </nav>
  );
};

export default Nav;
