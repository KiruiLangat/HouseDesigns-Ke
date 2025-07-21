const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Health check endpoint
  server.get('/healthz', (req, res) => {
    res.status(200).send('OK');
  });

  // Serve static files from the public folder with cache headers
  server.use(express.static(path.join(__dirname, 'public'), {
    maxAge: dev ? 0 : '30d',
    setHeaders: (res, filePath) => {
      if (!dev) {
        res.setHeader('Cache-Control', 'public, max-age=2592000'); // 30 days
      }
    }
  }));

  // Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Error logging middleware
  server.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).send('Internal Server Error');
  });

  const port = process.env.PORT || 3000;
  const listener = server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  // Graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully...');
    listener.close(() => {
      console.log('Server closed.');
      process.exit(0);
    });
  });
});