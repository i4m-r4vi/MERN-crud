import { React, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useNavigate } from "react-router";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const message = "Successfully Added"
  const link = useNavigate();

  const titleSet = (e) => {
    setTitle(e.target.value);
  };
  const descriptionSet = (e) => {
    setDescription(e.target.value);
  };

  const submitPost = async () => {
    try {
      if (!title || !description) {
        alert("Want to Enter Both Data");
      }
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/createpost/`, {
          title: title,
          description: description,
        })
        .then(() => {
          link("/",{state:message});
        });
    } catch {
      console.log("Something Error Occured");
    }
  };

  const cancel = ()=>{
    return link('/')
  }

  return (
    <Container>
      <h2 className="text-center m-4">Create Post</h2>
      <Row className="justify-content-md-center">
        <Col lg="8" xm="4">
          <Form onClick={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label fs-4">Title</label>
              <input
                type="email"
                className="form-control b-3"
                placeholder="Enter Title"
                onChange={titleSet}
                value={title}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fs-4">Description</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Description"
                onChange={descriptionSet}
                value={description}
              ></textarea>
            </div>
            <Button variant="dark" onClick={cancel}>Cancel</Button>
            <Button type="submit" className="mx-3" onClick={submitPost}>
              Create
            </Button>
            <Button variant="primary" disabled hidden>
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
  );
};

export default AddPost;
