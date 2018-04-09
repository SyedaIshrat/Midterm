
var host = "api.giphy.com";
var path = "/v1/gifs/random";
var apiKey = "WzJFIWuFzLiEZ87B8f8Af2OH844AF5Dj"; 
var tag = "sleepy"; 
var api = "https://" + host + path + "?api_key=" + apiKey + "&tag=" + tag;

// show random GIF
function showGif() {
    $.getJSON(api, function(giphy) {
        gifUrl = giphy.data.image_original_url;
        $('#img-container').prepend('<img src="' + gifUrl + '">');
    });
}

// remove the GIF
function removeGif() {
    $('#img-container img').remove();
}

// switching GIFs
function changeGif() {
    // previous GIF
    removeGif();
    // next GIF
    showGif();
}

// show first GIF on page load    
$(document).ready(function() {
    showGif();
});

// change GIF on button click
$("button").click(function() {
    changeGif();
});

