import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export async function conectDB() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Bd conected to ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
}
