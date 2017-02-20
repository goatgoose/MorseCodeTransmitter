
function sendMessage(text) {
    var data = {
        message: text
    };
    $.ajax({
        type: "POST",
        data: data,
        url: "/msgToMorse",
        dataType: "JSON",
        success: function(response) {
            console.log(response.message);
            var translationString = "";
            for (var wordIndex in response.morseWords) {
                var morseWord = response.morseWords[wordIndex];
                for (var letterIndex in morseWord.letters) {
                    var letter = morseWord.letters[letterIndex];
                    for (var symbolIndex in letter) {
                        translationString += letter[symbolIndex] + " ";
                    }
                }
                translationString += "    ";
            }
            console.log(response.morseWords);
            console.log(translationString);
            $("#log").append("<pre><p>" + response.message + ": <span>" + translationString + "</span></p></pre>");
        }
    });
}

$(document).ready(function() {
    console.log("test");
});

$(document).keypress(function(e) {
    if(e.which == 13) { // enter
        var textbox = $('#translateTextbox');
        sendMessage(textbox.val());
        textbox.val("");
    }
});