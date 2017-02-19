
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
    } else if (letter.toLowerCase() == "c") {
        return ["-", ".", "-", "."];
    } else if (letter.toLowerCase() == "d") {
        return ["-", ".", "."];
    } else if (letter.toLowerCase() == "e") {
        return ["."];
    } else if (letter.toLowerCase() == "f") {
        return [".", ".", "-", "."];
    } else if (letter.toLowerCase() == "g") {
        return ["-", "-", "."];
    } else if (letter.toLowerCase() == "h") {
        return [".", ".", ".", "."];
    } else if (letter.toLowerCase() == "i") {
        return [".", "."];
    } else if (letter.toLowerCase() == "j") {
        return [".", "-", "-", "-"];
    } else if (letter.toLowerCase() == "k") {
        return ["-", ".", "-"];
    } else if (letter.toLowerCase() == "l") {
        return [".", "-", ".", "."];
    } else if (letter.toLowerCase() == "m") {
        return ["-", "-"];
    } else if (letter.toLowerCase() == "n") {
        return ["-", "."];
    } else if (letter.toLowerCase() == "o") {
        return ["-", "-", "-"];
    } else if (letter.toLowerCase() == "p") {
        return [".", "-", "-", "."];
    } else if (letter.toLowerCase() == "q") {
        return ["-", "-", ".", "-"];
    } else if (letter.toLowerCase() == "r") {
        return [".", "-", "."];
    } else if (letter.toLowerCase() == "s") {
        return [".", ".", "."];
    } else if (letter.toLowerCase() == "t") {
        return ["-"];
    } else if (letter.toLowerCase() == "u") {
        return [".", ".", "-"];
    } else if (letter.toLowerCase() == "v") {
        return [".", ".", ".", "-"];
    }
};

MorseWord.prototype.getLetters = function() {
    return this.letters;
};

module.exports = MorseWord;