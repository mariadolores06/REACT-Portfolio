import React from 'react';
import { Col } from 'react-bootstrap';
import portrait from '../../assets/profile.pic.jpg'

function About() {
  return(
      <section className='title'>

          <div className='row justify-content-center' id='about-container'>
          <Col>
          <center><img src={portrait} className='profile-pic' alt='my-profile'/></center>
          <p className='name'>Maria Rodriguez</p>
          <p className='job'>Full Stack Web Developer</p>
          <h2 className='education'>About me</h2>

            <p>
            Hello, my name is Maria! I completed the Northwestern University Full Stack Web Development Bootcamp. Please feel free to check out my Github and Portfolio for past projects and current ones I am working ones. I have also attached my LinkedIn and Resume. Please reach out with any questions! 
            <br></br>
            </p> 
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> 
            <br></br>  
            </Col>
            </div>
        </section>
    )
};

export default About;