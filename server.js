const express = require('express')
const hbs = require('express-handlebars')

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
    const template = 'question'
    
    res.render(template)
})

module.exports = server