const fs = require("fs")

function addPoint(data){
  data.score = data.score + 1
  fs.writeFile('scores.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  })
}


module.exports = addPoint