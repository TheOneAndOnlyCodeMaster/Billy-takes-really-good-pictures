var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function startListening(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content == "hey Billy take my picture"){
    speak();
    }
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 95
});
camera = document.getElementById("camera");
function speak(){
    var synth = window.speechSynthesis;
    speakstuff = "Taking picture in five seconds";
    var uttertheword = new SpeechSynthesisUtterance(speakstuff);
    synth.speak(uttertheword);
    Webcam.attach(camera);
    setTimeout(function(){
        photobot();
        saveThePic();
    }, 5000)
}


function photobot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='pictor' src='"+data_uri+"'>";
});
}
function saveThePic(){
    aTag = document.getElementById("link");
    images = document.getElementById("pictor").src;
    aTag.href = images;
    aTag.click();
}