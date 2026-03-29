require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const rootRouter = require("./routes");
const connectDB = require("./config/db");

//middleware -> if you pass single argument to app.use(), its introducing a middleware
app.use(cors());
app.use(express.json());

//routes -> if you pass two arguments to app.use() , it acts as a router
app.use("/api/v1",rootRouter);

//db
connectDB();

//server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});




