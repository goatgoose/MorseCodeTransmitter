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

    var morseWords = [];
    for (var wordIndex in msg) {
        var word = msg[wordIndex];
        morseWords.push(new MorseWord(word));
    }

    res.json({
        "message": req.body.message,
        "morseWords": morseWords
    });

    for (var morseWordIndex in morseWords) {
        transmitter.transmitWord(morseWords[morseWordIndex]);
    }

});

module.exports = router;
