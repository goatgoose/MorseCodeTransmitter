
function MorseWord(word) {
    this.letters = [];
    for (letter in word) {
        this.letters.push(this.morseForLetter(letter));
    }
}

MorseWord.prototype.morseForLetter = function(letter) {
    if (letter.toLowerCase() == "") {

    } else if (letter.toLowerCase() == "a") {
        return [".", "-"];
    } else if (letter.toLowerCase() == "b") {
        return ["-", ".", ".", "."];
    }
};

MorseWord.prototype.getLetters = function() {
    return this.letters;
};