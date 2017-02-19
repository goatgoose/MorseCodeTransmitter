
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
    } else if (letter.toLowerCase() == "w") {
        return [".", "-", "-"];
    } else if (letter.toLowerCase() == "x") {
        return ["-", ".", ".", "-"];
    } else if (letter.toLowerCase() == "y") {
        return ["-", ".", "-", "-"];
    } else if (letter.toLowerCase() == "z") {
        return ["-", "-", ".", "."];
    } else if (letter.toLowerCase() == "1") {
        return [".", "-", "-", "-", "-"];
    } else if (letter.toLowerCase() == "2") {
        return [".", ".", "-", "-", "-"];
    } else if (letter.toLowerCase() == "3") {
        return [".", ".", ".", "-", "-"];
    } else if (letter.toLowerCase() == "4") {
        return [".", ".", ".", ".", "-"];
    } else if (letter.toLowerCase() == "5") {
        return [".", ".", ".", ".", "."];
    } else if (letter.toLowerCase() == "6") {
        return ["-", ".", ".", ".", "."];
    } else if (letter.toLowerCase() == "7") {
        return ["-", "-", ".", ".", "."];
    } else if (letter.toLowerCase() == "8") {
        return ["-", "-", "-", ".", "."];
    } else if (letter.toLowerCase() == "9") {
        return ["-", "-", "-", "-", "."];
    } else if (letter.toLowerCase() == "0") {
        return ["-", "-", "-", "-", "-"];
    }
};

MorseWord.prototype.getLetters = function() {
    return this.letters;
};

module.exports = MorseWord;