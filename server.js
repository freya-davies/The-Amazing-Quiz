const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes.js')

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.get('/', (req, res) => {

    // res.send("Working")
    res.redirect('/quiz')

})

server.use('/quiz', routes)

module.exports = server