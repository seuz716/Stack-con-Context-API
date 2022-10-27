import { Router } from "express";
import{createPost, deletePosts, getPost, getPosts, updatePosts }from '../controller/post.controller.js'
const router = Router();

router.get("/posts", getPosts);
router.post("/posts",createPost );
router.put("/posts",updatePosts );
router.delete("/posts", deletePosts);
router.get("/posts:id",getPost );


export default router;