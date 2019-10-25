const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')

function getQuiz(data, id) {
    return data.questions.find(questions => questions.id == id)
}

router.get('/', (req, res) => {
    let template = 'index'
    let viewData = data.questions
    res.render(template, viewData)
})

router.get('/scores', (req, res) => {
    let template = 'scoreboard'
    let viewData = data.questions
    res.render(template, viewData)
})

router.get('/questions/:id', (req, res) => {
    let id = req.params.id
    let viewData = getQuiz(data, id-1)
    const template = 'question'
    let nextId = id + 1
    
    if (id-1 > data.questions.length) {
        res.redirect('/scores')
    }
    res.render(template, viewData)
    //want to add next id in the if function only if its not the last id
})

module.exports = router