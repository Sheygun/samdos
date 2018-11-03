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
  // .get('/google', (req, res) => res.render('pages/google251ea7ea4521f66f'))
  // .get('/tope', (req, res) => res.render('pages/index'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))