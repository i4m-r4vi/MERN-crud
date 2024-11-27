import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from 'react-bootstrap/Spinner';


const LoadingSpinner = () => {
  return (
    <Container>
    <Row className='text-center mt-5'>
      <Col>
        <Spinner animation="border" />
      </Col>
    </Row>
  </Container>
  )
}

export default LoadingSpinner