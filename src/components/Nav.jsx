import React, { useState } from 'react';
import instagramLogo from '../assets/instagram.png';
import {
  CloseIcon,
  CommentIcon,
  CompassIcon,
  HeartIcon,
  HomeIcon,
  MenuIcon,
} from '../offlineIcons/Icons';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav>
      <button className='logo'>
        <img src={instagramLogo} alt='logo' />
      </button>
      <input type='text' className='search' placeholder='Search...' />
      <span
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <button className='inav'>
          <HomeIcon />
        </button>
        <button className='inav'>
          <CommentIcon />
        </button>
        <button className='inav'>
          <CompassIcon />
        </button>
        <button className='inav'>
          <HeartIcon />
        </button>
      </span>
      <div className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <CloseIcon /> : <MenuIcon />}
      </div>
    </nav>
  );
};

export default Nav;
