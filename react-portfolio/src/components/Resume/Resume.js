import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineFileWord } from 'react-icons/ai';
import Resume from '../../assets/resume.img.jpg';
// import Resumepdf from '../../assets/resume-pdf';

function ResumeForm() {
  return (
    <section>
      <div className='resume-container'>
        <Row>
          <Col lg={4} md={12}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React.js</li>
              <li>Frameworks: Bootstrap</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL: mysql12</li>
              <li>NoSQL: MongoDB, Mongoose</li>
              <li>API's: RESTful, server-side</li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h2 className='education'>Education</h2>
            <p>
              <span className='school-name'>Northwestern University - Full Stack Web Development Bootcamp</span>
              <br></br>
              <span className='school-name'>Loyola University Chicago - B.S. Psychology</span>
              <br></br>
            </p>
            <Col lg={3} md={12}>
              <a href={Resume} download>
                <AiOutlineFileWord />
              </a>
              <p className='icon-text'>Download Resume</p>
            </Col>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ResumeForm;