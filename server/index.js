import express from "express";
import { conectDB } from "./db.js";
import { port } from "./config.js";
import postsRoutes from './routes/post.routes.js'
const app = express();
conectDB();
app.use(postsRoutes);
app.listen(port);
console.log('Server is running on port '+ port)