const express = require('express')
const router = express.Router()
const data = require('./data.json')
const addPoint = require('./game')
const scoreLog = require('./scores.json')

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
    let viewData = getQuiz(data, id)
    const template = 'question'
    res.render(template, viewData)
})

router.post('/questions/:id', (request, response) => {
    let nextId = Number(request.params.id)+1
    response.redirect('/quiz/questions/'+ nextId)
    // addPoint(scoreLog) 
})

module.exports = router