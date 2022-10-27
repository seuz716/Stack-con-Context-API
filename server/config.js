
import  dotenv  from "dotenv";
dotenv.config();

export const MONGODB_URI = process.env.MONGODB || "mongodb://localhost:27017/post";
export const port = process.env.PORT || 3125;