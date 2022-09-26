function startClasssification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9bjfZSGFh/model.json', modelReady);


}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("Model Ready")
    if (error) {
       console.error(error)
    }
    else{
        console.log(results)
        accuracy = results[0].confidence.toFixed(1)
        sound = results[0].label
        document.getElementById("result_lbl").innerHTML = "I can hear: "+sound;
        document.getElementById("result_confidence").innerHTML = "Accuracy: "+accuracy+" %";
    }

}