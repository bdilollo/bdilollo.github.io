import React from 'react';
import ME from '../../assets/about-me.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='about image' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>20+, Front- & Back-End</small>
            </article>
          </div>
          <p>
            Hi, my name is Bradley and I'm a full-stack web developer. I'm relatively new to software development, but I have a passion for learning and love pushing myself to discover and build things with new technologies. When I'm not in front of a computer, you can find me exploring the great outdoors or experimenting in the kitchen.
          </p>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About