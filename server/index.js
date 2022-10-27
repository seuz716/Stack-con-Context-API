import express from "express";
import postsRoutes from './routes/post.routes.js'
const app = express();
app.use(postsRoutes);
const port = 3800
app.listen(port);
console.log('Server is running on port '+ port)