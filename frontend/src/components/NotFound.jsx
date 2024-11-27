import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <Container>
      <Row className='text-center mt-5'>
        <Col>
            <h2 className='display-3'>Not Found</h2>
            <Link to={'/'}>Go Back To Home Page</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound