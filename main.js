function setup() {
    canvas = createCanvas(250, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(250, 250);
    url = "https://teachablemachine.withgoogle.com/models/ppaTKd_T4/model.json";
    classifier = ml5.imageClassifier(url, modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded');
}

function draw() {
    image(video, 0, 0, 250, 250);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_obj_name").innerHTML = results[0].label;
        document.getElementById("result_obj_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}