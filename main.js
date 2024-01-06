function begin() {
    
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8gi5yMXpw/model.json',modelReady);

}

function modelReady() {
    console.log("model is ready");
    classifier.classify(gotresult);
    
}
function gotresult(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results)

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("hear").innerHTML= "I can hear : " + results[0].label;
        document.getElementById("acc").innerHTML= "Accuracy : " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("hear").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("acc").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("img");
       
        if(results[0].label=="meow" ) {
            img.src="cat-minimalistic-simple-60183.jpg"
        }
      else  if(results[0].label=="bark" ) {
            img.src="gTeERKRxc.png"
        }
        else  if(results[0].label=="roar" ) {
            img.src="3456.jpg"
        }
        else  if(results[0].label=="moo" ) {
            img.src="cow-portrait-stylized-symbol-black and white-cow-cow-dairy-icon-vector.jpg"
        }
       
                    
                    }
    }
