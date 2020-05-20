const express = require('express');
const mountRoutes = require('./routes');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express()
  .use('/', express.static(path.join(__dirname, '/public')))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .engine('html', require('ejs').renderFile)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('pages/landing_page'))
  .get('/index', (req, res) => res.render('pages/index'))
  .get('/end_page', (req, res) => res.render('pages/end_page'))
  .get('/landing_page', (req, res) => res.render('pages/landing_page'));

mountRoutes(app);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
