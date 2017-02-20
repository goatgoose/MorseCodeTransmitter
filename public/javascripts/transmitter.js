
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
            $("#log").append("<p>" + response.message + "</p>");
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