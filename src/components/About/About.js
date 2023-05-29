import React from 'react';
import { Col } from 'react-bootstrap';
import portrait from '../../assets/profile.pic.jpg'

function About() {
  return(
      <section className='title'>

          <div className='row justify-content-center' id='about-container'>
          <Col lg={6} md={12}>
          <center><img src={portrait} className='profile-pic' alt='my-profile'/></center>
          <p className='name'>Maria Rodriguez</p>
          <p className='job'>Full Stack Web Developer</p>
          <h2 className='education'>About me</h2>

            <p>
            Hello, my name is Maria! I completed the Northwestern University Full Stack Web Development Bootcamp. Please feel free to check out my Github and Portfolio for past projects and current ones I am working ones. I have also attached my LinkedIn and Resume. Please reach out with any questions! 
            <br></br>
            <br></br>
            </p>    
            </Col>
            </div>
        </section>
    )
};

export default About;