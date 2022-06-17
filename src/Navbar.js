import React, { useEffect } from 'react';
import {Link, useHistory } from 'react-router-dom';

const Navbar = () => {

  return (
        <nav>
          <Link to='/'  > <img className='img' src="https://img.icons8.com/external-fauzidea-outline-color-fauzidea/64/000000/external-bike-e-commerce-fauzidea-outline-color-fauzidea.png"/> </Link>
          <ul className='row justify-content-center ml-5' >
            <Link to='/' className='mr-5' > <li>Home</li> </Link>
            <Link to='/login' className='mr-5' > <li>Login</li> </Link>
            <Link to='/aboutus' className='mr-5' > <li>About Us</li> </Link>
            <Link to="/contactus" className='mr-5'> <li>Contact Us</li> </Link>       
          </ul>
        </nav>
  )
}

export default Navbar;