import history from 'connect-history-api-fallback';
import http from 'http';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const app = express();

// Use the connect-history-api-fallback middleware
app.use(history());

// Serve static files from the dist directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'dist')));

// Create an HTTP server
const server = http.createServer(app);

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
