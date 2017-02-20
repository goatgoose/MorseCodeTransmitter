var exec = require('child_process').exec;

function MorseTransmitter() {
    // make static???????????????
    this.DOT_LENGTH = 1;
    this.DASH_LENGTH = 3;
    this.LETTER_BREAK_LENGTH = 1;
    this.WORD_BREAK_LENGTH = 2;
}

MorseTransmitter.prototype.transmitWord = function(word) {
    for (var letter in word.getLetters()) {
        for (var signal in letter) {
            if (signal == undefined) {

            } else if (signal == ".") {
                this.executeScript("LEDON");
                this.sleep(this.DOT_LENGTH);
                this.executeScript("LEDOFF");
            } else if (signal == "-") {
                this.executeScript("LEDON");
                this.sleep(this.DASH_LENGTH);
                this.executeScript("LEDOFF");
            }
            this.sleep(this.LETTER_BREAK_LENGTH);
        }
        this.sleep(this.WORD_BREAK_LENGTH);
    }
};

MorseTransmitter.prototype.executeScript = function(script) {
    // http://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript
    exec("sudo python resources/" + script + ".py",
        function(error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        }
    );
};

MorseTransmitter.prototype.sleep = function(duration) {
    // http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
    var now = new Date().getTime();
    while(new Date().getTime() < now + duration){ }
};

module.exports = MorseTransmitter;