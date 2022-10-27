import { Router } from "express";
import {
  createPost,
  deletePosts,
  getPost,
  getPosts,
  updatePosts,
} from "../controller/post.controller.js";
const router = Router();

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.put("/posts/:id", updatePosts);
router.delete("/posts/:id", deletePosts);
router.get("/posts/:id", getPost);

export default router;
