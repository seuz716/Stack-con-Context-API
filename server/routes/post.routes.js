import { Router } from "express";
import {
  createPost,
  deletePosts,
  getPost,
  getPosts,
  updatePost,
} from "../controller/post.controller.js";
const router = Router();

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePosts);
router.get("/posts/:id", getPost);

export default router;
