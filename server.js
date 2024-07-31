const history = require('connect-history-api-fallback');
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

// Middleware for serving 'index.html' for all routes
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
