var express = require('express');
var MorseWord = require('../model/morse_word');
var MorseTransmitter = require('../model/morse_transmitter');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Morse Transmitter' });
});

router.post('/msgToMorse', function(req, res, next) {
    var transmitter = new MorseTransmitter(); // should def be static
    
    var msg = req.body.message.split(" ");
    res.send({"message": req.body.message});

    /*
    var morseWords = [];
    for (var wordIndex in msg) {
        var word = msg[wordIndex];
        var morseWord = new MorseWord(word);
        morseWords.push(morseWord.getLetters());

        transmitter.transmitWord(morseWord);
    }
    */
    console.log(msg);
    var morseWord = new MorseWord(msg[0]);
    transmitter.transmitWord(morseWord);
});

module.exports = router;
