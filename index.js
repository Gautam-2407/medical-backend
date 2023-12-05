require("dotenv").config();
const express = require("express");
const app = express();
const cors= require("cors");
require("./db/connection");
const router = require("./routes/router");
const PORT = 5000; 
app.use(express.json());
app.use(cors({
    origin:"http://localhost:4200"
}));
app.use("/", router);

app.listen(PORT, () => {
    console.log("server listening on port: " + PORT);
});