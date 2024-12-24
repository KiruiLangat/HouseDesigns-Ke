const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  {/*ROUTES FETCHING FROM DATABASE*/}

  //Swiper route (carousel for homepage)
  server.get('/api/swiper', (req, res) => {
    return handle(req,res)
  });

  //Browse route (browse carousel for homepage)
  server.get('/api/browse', (req, res) => {
    return handle(req,res)
  });

  //Residential projects route
  server.get('/api/residentials/:subCategoryId', (req, res) => {
    return handle(req,res)
  });

  //Project images using title route
  server.get('/api/residentials/project-images/:title', (req, res) => {
    return handle(req,res)
  });
  
  //Project details using title route
  server.get('/api/residentials/project-details/:title', (req, res) => {
    return handle(req,res)
  });

  //Contact Form submission route
  server.post('/api/contact-form', (req, res) => {
    return handle(req,res)
  });

  //Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });


});