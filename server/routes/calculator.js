var express = require('express');
var router = express.Router();
var answer;
var numHolder;

router.post('/', function(req, res) {
  numHolder = req.body;
  console.log(numHolder.x);
  console.log(numHolder.y);
  console.log(numHolder.type);
  switch(numHolder.type){
    case '+':
    answer = Number(numHolder.x) + Number(numHolder.y);
    break;
    case '-':
    answer = Number(numHolder.x) - Number(numHolder.y);
    break;
    case '*':
    answer = Number(numHolder.x) * Number(numHolder.y);
    break;
    case '/':
    answer = Number(numHolder.x) / Number(numHolder.y);
    break;
    default:
    alert("Something went horribly wrong!");
  }
console.log(answer);
  res.send(answer.toString());
});

module.exports = router;
