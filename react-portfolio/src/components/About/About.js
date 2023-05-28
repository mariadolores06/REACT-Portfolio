import React from 'react';
import { Col } from 'react-bootstrap';
import portrait from '../../assets/Profile-pic.jpg'

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
            {/* Hello, my name is Maria! */}
            <br></br>
            <br></br>
            {/**/}
            <br></br>
            <br></br>
            </p>    
            </Col>
            </div>
        </section>
    )
};

export default About;