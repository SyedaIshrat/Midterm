
var host = "api.giphy.com";
var path = "/v1/gifs/random";
var apiKey = "WzJFIWuFzLiEZ87B8f8Af2OH844AF5Dj"; 
var tag = "sleepy";
var tag2 = "fire"; 
var api = "https://" + host + path + "?api_key=" + apiKey + "&tag=" + tag;
var bkg = "https://" + host + path + "?api_key=" + apiKey + "&tag=" + tag2;

// var audio = new Audio('audio_file.mp3');


// shows random GIF
function showGif() {
    $.getJSON(api, function(giphy) {
        $.getJSON(bkg, function(bkgGiphy) {
    var gifUrl = giphy.data.image_original_url;
var bkurl = gifUrl = giphy.data.image_original_url;
            $('#img-container').prepend('<img src="' + gifUrl + '">');
            document.body.style.backgroundImage = 'url(' + gifUrl + ')';
        })
        
        
    });
}

// remove the GIF
function removeGif() {
    $('#img-container img').remove();
}

// switches GIF
function changeGif() {
    // previous GIF
    removeGif();
    // next GIF
    showGif();
}

// shows first GIF on loading page   
$(document).ready(function() {
    showGif();
});

// changes GIF when clicked on button
$("button").click(function() {
    changeGif();
});

