import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { GrGithub } from "react-icons/bs";
import { GrLinkedin } from 'react-icons/bs';
import { BsEnvelopeFill } from 'react-icons/bs';

function Footer() {
    return (

<div className='page-footer' id='footer'>

    <Row>
        <Col lg={3} md={12}>
            <a href='https://github.com/mariadolores06'><GrGithub /></a>
        </Col>

        <Col lg={3} md={12}>
            <a href='https://www.linkedin.com/in/maria-rodriguez-b4962618b/'><GrLinkedin /></a>
        </Col>

        <Col lg={3} md={12}>
            <a href='mailto:mrodriguez@gmail.com'><BsEnvelopeFill /></a>
        </Col>
    </Row>
</div>
    )
}

export default Footer;