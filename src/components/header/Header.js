import React from 'react'
import CV from '../../assets/Bradley-DiLollo-CV.pdf';
import ME from '../../assets/me.png';
import HeaderLinks from './HeaderLinks';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h1>Bradley DiLollo</h1>
        <h5 className='text-light'>Software Developer</h5>
        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
        <HeaderLinks />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
          
      </div>
    </header>
  )
}

export default Header