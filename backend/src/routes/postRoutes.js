import express from "express";
import { createPost,getPosts,getSinglePost,updateSinglePost,deletePost } from "../controllers/postControllers.js";

const routes =  express.Router()

routes.get('/posts',getPosts)
routes.post('/createpost',createPost)
routes.get('/post/:id',getSinglePost)
routes.put('/updatepost/:id',updateSinglePost)
routes.delete('/deletepost/:id',deletePost)

export default routes
