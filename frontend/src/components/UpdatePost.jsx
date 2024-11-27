import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner"

const UpdatePost = () => {
  return (
    <div>
        <Container>
      <h2 className="text-center m-4">Update Post</h2>
      <Row className="justify-content-md-center">
        <Col lg="8" xm="4">
          <Form onClick={(e)=>e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label fs-4">Title</label>
              <input
                type="email"
                className="form-control b-3"
                placeholder="Enter Title"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fs-4">Description</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Description"
              ></textarea>
            </div>
            <Button variant="dark">Cancel</Button>
            <Button variant="success" type="submit" className="mx-3">
              Update
            </Button>
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default UpdatePost