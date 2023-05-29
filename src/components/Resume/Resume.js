import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineFileWord } from 'react-icons/ai';
import {BsFiletypeHtml} from 'react-icons/bs';
import{BsFiletypeCss} from 'react-icons/bs';
import {DiJavascript1} from 'react-icons/di';
import {DiJqueryLogo} from 'react-icons/di';
import {DiReact} from 'react-icons/di';
import {BsFillBootstrapFill} from 'react-icons/bs';
import {GrNode} from 'react-icons/gr';
import {SiExpress} from 'react-icons/si';
import {DiMysql} from 'react-icons/di';
import {DiMongodb} from 'react-icons/di';
import {TbApi} from 'react-icons/tb';
import Resume from '../../assets/resume.img.jpg';


function ResumeForm() {
  return (
    <section>
      <div className='resume-container'>
        <Row>
          <Col lg={6} md={12}>
            <ul>
              <li><BsFiletypeHtml/> HTML</li>
              <li><BsFiletypeCss/> CSS </li>
              <li>< DiJavascript1/> JavaScript</li>
              <li><DiJqueryLogo/> jQuery </li>
              <li><DiReact/> React.js </li>
              <li><BsFillBootstrapFill/> Frameworks: Bootstrap </li>
              <li>< GrNode/> Node.js </li>
              <li>< SiExpress/> Express.js </li>
              <li>< DiMysql/> MySQL: mysql12</li>
              <li>< DiMongodb/> NoSQL: MongoDB , Mongoose</li>
              <li>< TbApi/> API's: RESTful, server-side</li>
            </ul>
          </Col>

          <Col lg={6} md={12}>
            <h2 className='education'>Education</h2>
            <p>
              <span className='school-name'>Northwestern University - Full Stack Web Development Bootcamp</span>
              <br></br>
              <span className='school-name'>Loyola University Chicago - B.S. Psychology</span>
              <br></br>
            </p>
            <Col lg={6} md={12}>
              <a href={Resume}Resume>
                <AiOutlineFileWord />
              </a>
              <p className='icon-text'>Download My Resume</p>
            </Col>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ResumeForm;