import postModel from "../model/model.js"
import { isValidObjectId } from "mongoose"

const createPost = async(req,res)=>{
    const {title,description} = req.body
    try {
        if(!title || !description){
            return res.status(400).send('It is Needed Title And Description')
        }
        await postModel.create({title:title,description:description})
        res.status(201).send('Successfully Created Post')
    } catch (error) {
        res.status(500).send('Internal Server Error')
        console.log({Error:error});
    }
}

const getPosts = async(req,res)=>{
    try {
        const getPosts = await postModel.find({})
        res.status(200).send(getPosts)
    } catch (error) {
        res.status(500).send('Internal Server Error')
        console.log({Error:error});
    }
}

const getSinglePost = async(req,res)=>{
    try {
        const {id} = req.params
        if(!isValidObjectId(id)){
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        const getSinglePost = await postModel.findById(id)
        if(!getSinglePost){
            return res.status(404).json({ error: 'There is no Data' });
        }
        res.send(getSinglePost)
    } catch (error) {
        res.status(500).send('Internal Server Error')
        console.log({Error:error}); 
    }
}

const updateSinglePost = async (req,res)=>{
    try {
        const {id} = req.params
        const {title,description} = req.body
        if(!isValidObjectId(id)){
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        if (!title || !description) {
            return res.status(400).json({ error: 'Missing required fields: title and/or description' });
        }        
        const getSinglePost = await postModel.findByIdAndUpdate(id)
        getSinglePost.title = title
        getSinglePost.description = description
        getSinglePost.save()
        res.status(200).send('Successfully Updated')
    } catch (error) {
        res.status(500).send('Internal Server Error')
        console.log({Error:error});
    }
}

const deletePost = async(req,res)=>{
    try {
        const {id} = req.params
        if(!isValidObjectId(id)){
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        await postModel.findByIdAndDelete(id)
        res.status(200).send('Deleted Successfully')
    } catch (error) {
        res.status(500).send('Internal Server Error')
        console.log({Error:error});
    }
}

export {createPost,getPosts,getSinglePost,updateSinglePost,deletePost}