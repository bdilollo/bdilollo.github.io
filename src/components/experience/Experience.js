import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Front-End Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Material UI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
        <h3>Back-End Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>REST APIs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>GraphQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience