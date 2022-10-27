import express from "express";
import morgan from "morgan";

import postsRoutes from './routes/post.routes.js';
const app = express();
app.use(express.json());
app.use(morgan("combined"));

/* Routes */
app.use(postsRoutes);

export default app;
