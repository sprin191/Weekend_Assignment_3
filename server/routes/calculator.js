var express = require('express');
var router = express.Router();
var answer;
var numHolder;

router.post('/addition', function(req, res) {
  numHolder = req.body;
  answer = Number(numHolder.x) + Number(numHolder.y);
  res.send(answer.toString());
});

router.post('/subtraction', function(req, res) {
  numHolder = req.body;
  answer = Number(numHolder.x) - Number(numHolder.y);
  res.send(answer.toString());
});

router.post('/multiplication', function(req, res) {
  numHolder = req.body;
  answer = Number(numHolder.x) * Number(numHolder.y);
  res.send(answer.toString());
});

router.post('/division', function(req, res) {
  numHolder = req.body;
  answer = Number(numHolder.x) / Number(numHolder.y);
  res.send(answer.toString());
});

module.exports = router;
