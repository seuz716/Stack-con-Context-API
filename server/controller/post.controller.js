import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  const post = await Post.find();
  res.send([post]);
};

export const createPost = async (req, res) => {
  const { title, description } = req.body;
  const newPost = new Post({ title, description });
  await newPost.save();
  return res.json(newPost);
};
export const updatePosts = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(post);
  console.log(req.body);
  res.send("Received" + post);
};

export const deletePosts = async (req, res) => {
  const postRemoved = await Post.findByIdAndDelete(req.params.id);
  if (!postRemoved) {
    return res.sendStatus(404);
  } else {
    res.sendStatus(204);
  }
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.sendStatus(404);
  } else {
    res.json(post);
  }
};
