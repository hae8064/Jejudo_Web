var slides = document.querySelectorAll("#slides > img");
var slideWrapper = document.querySelector("#slideshow");
var totalSlides = slides.length;
var sliderWidth = slideWrapper.clientWidth;

var current = 0;

var slider = document.querySelector("#slides");

// slider.style.width = sliderWidth * totalSlides + 'px';

var myImage = document.getElementById("mainImage");
var imageArray = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"];
var imageIndex = 0;

function changeImage(){
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex >= imageArray.length){
        imageIndex = 0;
    }
}

setInterval(changeImage, 3000);
