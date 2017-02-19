
function MorseWord(word) {

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

};