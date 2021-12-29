import React from 'react';
import Navigation from '../Navigation';
import headshot from '../../assets/headshot.jpg';

const Header = () => {

  return (
    <header className='container'>
      <div className='flex-box'>
        <div>
          <h1>David F. Mueth</h1>
          <h2>(The Brief, Wondrous Career of DoctorMuch*)</h2>
        </div>
        <img src={headshot} alt='David Mueth himself' />
      </div>
      <div>
        <Navigation
        />
      </div>
    </header>
  )
}

export default Header;