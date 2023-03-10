import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderLinks = () => {
  return (
    <div className='header_links'>
        <a href='https://www.linkedin.com/in/bradley-dilollo/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/bdilollo?tab=repositories' target='_blank' rel='noreferrer'><BsGithub /></a>
    </div>
  )
}

export default HeaderLinks