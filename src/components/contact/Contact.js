import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tqtvsip', 'template_gwz3iap', form.current, '8OBdrlRGbMgm0W5Yz')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>bldilollo@gmail.com</h5>
            <a href='mailto:bldilollo@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlinePhone className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>(316)250-6756</h5>
            <a href='tel:+13162506756'>Call</a> or <a href='sms:+13162506756'>Text</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Name' required />
          <input type ='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='7' placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact