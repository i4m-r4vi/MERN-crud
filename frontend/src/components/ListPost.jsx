import React from "react";
import { FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { AiFillPlusCircle } from "react-icons/ai";
import Container from "react-bootstrap/esm/Container";

const arrayData = [
  { id: 1, title: "Ravi", descrition: "My Name" },
  { id: 2, title: "Santhosh", descrition: "My Friend" },
  { id: 3, title: "Sapna", descrition: "My Friend" },
  { id: 3, title: "Sapna", descrition: "My Friend" },
  { id: 3, title: "Sapna", descrition: "My Friend" },
  { id: 3, title: "Sapna", descrition: "My Friend" },
  { id: 3, title: "Sapna", descrition: "My Friend" },
];

const ListPost = () => {
  return (
    <Container className="align-items-xs-center">
      <div className="text-center mt-3">
        <h2>List Post</h2>
      </div>
      <Button className=" d-flex align-items-center btn btn-success mx-2">
        Add Post
        <AiFillPlusCircle className="mx-2" />
      </Button>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
        {arrayData.length>0?(arrayData.map((items) => (
          <div className="col d-xs-flex align-items-center justify-content-center">
            <Card className="mt-4">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  {items.title}
                  <div>
                    <FaPencil className="mx-2 h4 text-primary" />
                    <MdDeleteForever className="h4 text-danger" />
                  </div>
                </Card.Title>
                <Card.Text>{items.descrition}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))):(
          <p>There is No Data</p>
        )}
      </div>
    </Container>
  );
};

export default ListPost;
