// Import required modules using ES module syntax
import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';

// Create an Express app
const app = express();


// Set server IP address and port
const serverIP = '127.0.0.1'; // Localhost
const port = 8000;
app.use(cors());


// Define a route for the root path '/'
app.get('/', (req, res) => {
    // res.send('Hello World!');
    // Alternatively, serve an HTML file:
    console.log("Someone asked for some shit")
    res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});
// Serve static files from the 'dist' directory
app.use(express.static(path.join(process.cwd(), 'dist')));

// Create an HTTP server with the Express app
const server = http.createServer(app);

// Start the server to listen on the specified IP address and port
server.listen(port, serverIP, () => {
    console.log(`Server running at http://${serverIP}:${port}/`);
});