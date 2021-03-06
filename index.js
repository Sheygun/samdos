const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/home', (req, res) => res.render('pages/index'))
  

  
  
  .get('/blog1', (req, res) => res.render('pages/blog1'))
  .get('/blog2', (req, res) => res.render('pages/blog2'))
  .get('/blog3', (req, res) => res.render('pages/blog3'))
  .get('/blog4', (req, res) => res.render('pages/blog4'))
  .get('/blog5', (req, res) => res.render('pages/blog5'))
  .get('/error', (req, res) => res.render('pages/unprocessed'))
  .get('/login', (req, res) => res.render('pages/login'))
  .get('/signup', (req, res) => res.render('pages/signup'))
  .get('/feedback', (req, res) => res.render('pages/feedback'))
  .get('/blog', (req, res) => res.render('pages/blog'))
  .get('/tutorial', (req, res) => res.render('pages/tutorial'))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))