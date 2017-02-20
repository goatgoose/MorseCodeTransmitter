var exec = require('child_process').exec;
var Future = require('fibers/future'), wait = Future.wait;

function sleep(s) {
    var future = new Future;
    setTimeout(function() {
        future.return();
    }, s * 1000);
    return future;
}

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
                sleep(this.DOT_LENGTH).wait();
                this.executeScript("LEDOFF");
            } else if (signal == "-") {
                this.executeScript("LEDON");
                sleep(this.DASH_LENGTH).wait();
                this.executeScript("LEDOFF");
            }
            sleep(this.LETTER_BREAK_LENGTH).wait();
        }
        sleep(this.WORD_BREAK_LENGTH).wait();
    }
}.future();

MorseTransmitter.prototype.executeScript = function(script) {
    console.log(script);
    // http://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript
    exec("echo " + script,
        function(error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        }
    );
};

module.exports = MorseTransmitter;