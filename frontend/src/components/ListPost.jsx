import { React, useState, useEffect } from "react";
import { FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { AiFillPlusCircle } from "react-icons/ai";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { Link , useLocation ,useNavigate} from "react-router";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ListPost = () => {
  const [post, setPost] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  const [open, setOpen] = useState(false);
  const [openInsert, setOpenInsert] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openError, setOpenError] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const arrayData = async () => {
      try {
        const listPost = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/posts`);
        setPost(listPost.data);
      } catch (error) {
        setOpenError((prev)=>!prev)
      }
    };
    arrayData();
  }, [fetchData]);

  useEffect(()=>{
    if(location.state){
      setOpenInsert((prev)=>!prev)
    }
    navigate('/',{replace:true})
  },[location.state])

  useEffect(()=>{
    if(location.state){
      setOpenUpdate((prev)=>!prev)
    }
    navigate('/',{replace:true})
  },[location.state])

  const deletepost = async (id) => {
    const deleteAlert = window.confirm("Do You Want to Delete?");
    try {
      if (deleteAlert) {
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/deletepost/${id}`);
        setFetchData((prev) => !prev);
        setOpen(true);
      }
    } catch (error) {
      console.log("Something Error Occured");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenInsert(false);
    setOpenUpdate(false);
    setOpenError(false)
  };

  return (
    <Container className="align-items-xs-center">
      <div className="text-center mt-3">
        <h2>List Post</h2>
      </div>
      <Link to={"/addpost"} style={{ textDecoration: "none" }}>
        <Button className=" d-flex align-items-center btn btn-success mx-2">
          Add Post
          <AiFillPlusCircle className="mx-2" />
        </Button>
      </Link>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
        {post.length > 0 ? (
          post.map((items, i) => (
            <div
              className="col d-xs-flex align-items-center justify-content-center"
              key={i}
            >
              <Card className="mt-4" style={{ height: "8rem" }}>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    {items.title}
                    <div>
                      <Link to={`/updatepost/${items._id}`}>
                        <FaPencil className="mx-2 h4 text-primary" />
                      </Link>
                      <Link onClick={() => deletepost(items._id)}>
                        <MdDeleteForever className="h4 text-danger" />
                      </Link>
                    </div>
                  </Card.Title>
                  <Card.Text>{items.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center" style={{ width: "100%" }}>
            There is No Data
          </p>
        )}
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Successfully Deleted
        </Alert>
      </Snackbar>

      <Snackbar open={openInsert} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Successfully Inserted
        </Alert>
      </Snackbar>

      <Snackbar open={openUpdate} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Successfully Updated
        </Alert>
      </Snackbar>

      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "120%" }}
        >
          Couldn't Fetch Data's
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ListPost;
