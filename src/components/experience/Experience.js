import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  const FEdata = [
    {
      skill: 'HTML',
      exp: 'Experienced'
    },
    {
      skill: 'CSS',
      exp: 'Intermediate'
    },
    {
      skill: 'JavaScript',
      exp: 'Experienced'
    },
    {
      skill: 'React',
      exp: 'Experienced'
    },
    {
      skill: 'Material UI',
      exp: 'Intermediate'
    },
    {
      skill: 'Responsive Web Design',
      exp: 'Intermediate'
    }
  ];
  const BEdata = [
    {
      skill: 'Node.js',
      exp: 'Experienced'
    },
    {
      skill: 'Express.js',
      exp: 'Experienced'
    },
    {
      skill: 'MySQL',
      exp: 'Intermediate'
    },
    {
      skill: 'MongoDB',
      exp: 'Intermediate'
    },
    {
      skill: 'REST APIs',
      exp: 'Experienced'
    },
    {
      skill: 'GraphQL',
      exp: 'Beginner'
    }
  ];
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Front-End Development</h3>
          <div className='experience_content'>
            {
              FEdata.map(({ skill, exp }) => {
                return (
                  <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div>
                      <h4>{skill}</h4>
                      <small className='text-light'>{exp}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>

        <div className='experience_backend'>
        <h3>Back-End Development</h3>
          <div className='experience_content'>
            {
              BEdata.map(({ skill, exp }) => {
                return(
                  <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon' />
                    <div>
                      <h4>{skill}</h4>
                      <small className='text-light'>{exp}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience