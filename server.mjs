// Import required modules using ES module syntax
import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import fs from "fs";

// Create an Express app
const app = express();


// Set server IP address and port
const serverIP = '127.0.0.1'; // Localhost
const port = 8000;
app.use(cors());
app.use(express.json())

app.use((req, res, next)=>{console.log(`Received ${req.method} request for ${req.url}`);next();});

// Define a route for the root path '/'
app.get('/', (req, res) => {
    console.log("Asked for index.html")
    res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

app.get('/todoList', (req, res) => {
    console.log("Asked for DB")
    let jsonData = JSON.parse(fs.readFileSync('./todoList.json', "utf-8"));
    res.json(jsonData);
});

app.post("/todoList", (req,res) =>{
    let jsonString = JSON.stringify(req.body);
    fs.writeFileSync('./todoList.json', jsonString);
    res.status(201).json({message: "post done"})
});

app.delete("/todoList/:id", (req,res) =>{
    const { id } = req.params;
    let jsonData = JSON.parse(fs.readFileSync('./todoList.json', "utf-8"));
    jsonData.splice(id, 1);
    fs.writeFileSync('./todoList.json', JSON.stringify(jsonData));
    console.log(`Asked to delete id ${id}`)
    res.status(200).json({message: `delete id ${id}`})
});

// Serve static files from the 'dist' directory
app.use(express.static(path.join(process.cwd(), 'dist')), ()=>{console.log("Serve file", req.body)});

// Create an HTTP server with the Express app
const server = http.createServer(app);

// Start the server to listen on the specified IP address and port
server.listen(port, serverIP, () => {
    console.log(`Server running at http://${serverIP}:${port}/`);
});