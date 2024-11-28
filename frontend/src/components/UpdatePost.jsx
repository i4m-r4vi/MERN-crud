import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useParams,useNavigate } from "react-router";
import axios from "axios";
import dotenv from "dotenv"



const UpdatePost = () => {
  dotenv.config()
  const {id} = useParams()
  const [title , setTitle] = useState('')
  const [description , setDescription] = useState('')
  const link = useNavigate()
  const message = "Successfully Added"

  const titleSet = (e)=>{
    setTitle(e.target.value)
  }

  const descriptionSet = (e)=>{
    setDescription(e.target.value)
  }

  useEffect(()=>{
    const getPost = async ()=>{
      const Post = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/post/${id}`);
      setTitle(Post.data.title)
      setDescription(Post.data.description)
    }
    getPost()
  },[])

  const cancel = ()=>{
    return link('/')
  }

  const update = async (id)=>{
    try{
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/updatepost/${id}`,{
        title:title,
        description:description
      })
    }
    catch{
      console.log('Something Error Occured');
    }
    finally{
      link('/',{state:message})
    }
    
  }

  return (
    <div>
      <Container>
        <h2 className="text-center m-4">Update Post</h2>
        <Row className="justify-content-md-center">
          <Col lg="8" xm="4">
            <Form onClick={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label fs-4">Title</label>
                <input
                  type="text"
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
                />
              </div>
              <Button variant="dark" onClick={cancel}>Cancel</Button>
              <Button variant="success" type="submit" className="mx-3" onClick={()=>update(id)}>
                Update
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
    </div>
  );
};

export default UpdatePost;
