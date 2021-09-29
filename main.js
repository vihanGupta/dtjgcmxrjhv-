var speechRecognition = window.webkitSpeechRecognition;

var Recognition = new speechRecognition();

function start()
{
    document.getElementById("voice_checker").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("voice_checker").innerHTML = content;
    console.log(content);
}