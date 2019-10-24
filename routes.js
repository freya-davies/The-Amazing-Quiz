const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')

router.get('/', (req, res) => {
    const template = 'index'
    const viewData = data.questions
    res.render(template, viewData)
})

router.get('/questions', (req, res) => {
    const template = 'question'
    const viewData = data.questions[0]
    res.render(template, viewData)
})

module.exports = router