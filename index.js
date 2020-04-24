const express = require('express')
const mountRoutes = require('./routes');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()
  .use('/', express.static(path.join(__dirname, '/public')))
  .use(express.urlencoded({ extended: true }))
  .engine('html', require('ejs').renderFile)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('pages/index'));

mountRoutes(app);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
