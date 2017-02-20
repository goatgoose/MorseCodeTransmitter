
function sendMessage(message) {
    $.ajax({
        type: "POST",
        data: message,
        url: "/msgToMorse",
        dataType: "JSON",
        success: function(response) {
            console.log(response.morseWords);
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