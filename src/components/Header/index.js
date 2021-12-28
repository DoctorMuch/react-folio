import React from 'react';
import Navigation from '../Navigation';

const Header = () => {

  return (
    <header className='container'>
      <div className='flex-box'>
        <h1>David F. Mueth</h1>
        <h2>(The Brief, Wondrous Career of DoctorMuch*)</h2>
      </div>
      <div>
        <Navigation
           />
      </div>
    </header>
  )
}

export default Header;