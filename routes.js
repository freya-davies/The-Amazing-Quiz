const express = require('express')
const fs = require('fs')
const router = express.Router()
const data = require('./data.json')
const addPoint = require('./game')
const scoreLog = require('./scores.json')

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
    let viewData = scoreLog
    res.render(template, viewData)
})

router.post('/', (req, res) => {
    scoreLog.name = req.body.name
    scoreLog.score = 0
    fs.writeFile('scores.json', JSON.stringify(scoreLog), (err) => {
    if (err) throw err;
  })
  res.redirect('/quiz/questions/1')
})

router.get('/questions/:id', (req, res) => {
  let id = req.params.id
  let viewData = getQuiz(data, id)
  const template = 'question'
  let nextId = id + 1

  if (id == data.questions.length + 1) {
    res.redirect('/quiz/scores')
  } else if (id > data.questions.length + 1 || id < 0) {
    res.send('Oops, this page does not exist')
  } else {
    res.render(template, viewData)
  }
  //want to add next id in the if function only if its not the last id

})

router.post('/questions/:id', (request, response) => {
  let nextId = Number(request.params.id) + 1
  response.redirect('/quiz/questions/' + nextId)
  addPoint(scoreLog)
})

module.exports = router
