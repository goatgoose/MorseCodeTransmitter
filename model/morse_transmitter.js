var exec = require('child_process').exec;
var sleep = require('sleep');

function MorseTransmitter() {
    // make static???????????????
    this.DOT_LENGTH = 1;
    this.DASH_LENGTH = 3;
    this.LETTER_BREAK_LENGTH = 1;
    this.WORD_BREAK_LENGTH = 2;
}

MorseTransmitter.prototype.transmitWord = function(word) {
    console.log(word.word);
    for (var letterIndex in word.letters) {
        var letter = word.letters[letterIndex];
        console.log(word.word[letterIndex]);
        for (var signalIndex in letter) {
            var signal = letter[signalIndex];
            console.log(signal);

            if (signal == undefined) {

            } else if (signal == ".") {
                this.executeScript("LEDON");
                //sleep(this.DOT_LENGTH);
                this.executeScript("LEDOFF");
            } else if (signal == "-") {
                this.executeScript("LEDON");
                //sleep(this.DASH_LENGTH);
                this.executeScript("LEDOFF");
            }
            //sleep(this.LETTER_BREAK_LENGTH);
        }
        //sleep(this.WORD_BREAK_LENGTH);
    }
};

MorseTransmitter.prototype.executeScript = function(script) {
    // http://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript
    /*
    exec("echo " + script,
        function(error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        }
    );
    */
    //console.log(script);
};

module.exports = MorseTransmitter;