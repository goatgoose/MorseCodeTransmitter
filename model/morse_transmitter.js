var exec = require('child_process').exec;

function MorseTransmitter() {
    this.DOT_LENGTH = 1;
    this.DASH_LENGTH = 3;
    this.LETTER_BREAK_LENGTH = 1;
    this.WORD_BREAK_LENGTH = 3;
}

MorseTransmitter.prototype.transmitWord = function(word) {
    for (letter in word.getLetters()) {
        for (signal in letter) {
            if (signal == undefined) {

            } else if (signal == ".") {

            } else if (signal == "-") {

            }
        }
    }
};

MorseTransmitter.prototype.executeScript = function(script) {
    // http://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript
    exec("python resources/" + script + ".py",
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