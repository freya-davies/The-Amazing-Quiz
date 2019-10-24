const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')

function getQuiz(data, id) {
    return data.questions.find(questions => questions.id == id)
}

router.get('/', (req, res) => {
    const template = 'index'
    const viewData = data.questions
    res.render(template, viewData)
})

router.get('/questions/:id', (req, res) => {
    let id = req.params.id
    let viewData = getQuiz(data, id-1)
    const template = 'question'
    res.render(template, viewData)
})

module.exports = router