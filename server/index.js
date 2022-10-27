import { conectDB } from "./db.js";
import { port } from "./config.js";
import app from "./app.js";
conectDB();
app.listen(port);
console.log("Server is running on port " + port);
