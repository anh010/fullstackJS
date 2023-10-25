import express from "express";
// using  star importing express package as a whole
import os from "os"
// console.log(express);

import config from "./config";

const server = express();

// line to use middle ware
server.use(express.static("dist"));

server.set("view engine", "ejs");

// request object used to be read info on incoming request
// response used to send back content to client 
server.use("/",(req, res) =>{
    res.render("index",{
        content:"EJS is <em>Cool!</em>",
    });
});

// 1st arg is port 
// 2nd machine host
// 3rd function to be executed to when server is mounted
server.listen(config.PORT, config.HOST  ,()=>{
    console.info(
        `express server is listening at ${config.SERVER_URL}`,
        `Free Mem: ${os.freemem()/1024/1024}` 
    );
});