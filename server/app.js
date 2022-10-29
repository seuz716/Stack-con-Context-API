import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";

import postsRoutes from './routes/post.routes.js';
const app = express();
app.use(morgan("combined"));
app.use(express.json());

 app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'./upload'
} ));


/* Routes */
app.use(postsRoutes);

export default app;
