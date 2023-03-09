import React from 'react';
import IMG from '../../assets/example-portfolio-item.jpg';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';
import port4 from '../../assets/port4.png';
import port5 from '../../assets/port5.png';
import port6 from '../../assets/port6.png';
import './portfolio.css';

const data = [
  {
    id: 1,
    image: port1,
    title: 'City Grader',
    github: 'https://github.com/bdilollo/neighborhood-grader',
    demo: 'https://joedjensen.github.io/neighborhood-grader/'
  },
  {
    id: 2,
    image: port2,
    title: 'Yoked',
    github: 'https://github.com/bdilollo/Yoked',
    demo: 'https://young-headland-04692.herokuapp.com/login'
  },
  {
    id: 3,
    image: port3,
    title: 'Google Books Search Engine',
    github: 'https://github.com/bdilollo/book-search-engine',
    demo: 'https://ancient-fortress-13590.herokuapp.com/'
  },
  {
    id: 4,
    image: port4,
    title: 'PWA Text Editor',
    github: 'https://github.com/bdilollo/text-editor',
    demo: 'https://ancient-sea-72366.herokuapp.com/'
  },
  {
    id: 5,
    image: port5,
    title: 'README Generator',
    github: 'https://github.com/bdilollo/README-generator',
    demo: 'https://drive.google.com/file/d/1r95JEXFdsQ1D4x7uZxhFWbNeUCWYBO4O/view'
  },
  {
    id: 6,
    image: port6,
    title: 'E-Commerce Back End',
    github: 'https://github.com/bdilollo/e-commerce-back-end',
    demo: 'https://drive.google.com/file/d/1Z-ZdZURAf6cpGZ2t1hiUl0zOkVd6JGHK/view'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio