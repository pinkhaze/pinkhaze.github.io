// heavily based on the following sources: //
// https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9
// https://www.youtube.com/watch?v=wQcR25IyPBQ 
// https://www.w3schools.com/w3css/w3css_slideshow.asp 
// https://stackoverflow.com/questions/43961189/automatic-slideshow-with-button-->

var slideIndex = 0;
var slide, indicator;

function showSlides() {
    var i;
    slide = document.getElementsByClassName("slides");
    indicator = document.getElementsByClassName("dot");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slide.length) { slideIndex = 1 }
    for (i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(" current", "");
    }
    slide[slideIndex - 1].style.display = "block";
    indicator[slideIndex - 1].className += " current";
    // calls displaySlide function every 5 seconds https://www.w3schools.com/jsref/met_win_settimeout.asp //
    setTimeout(showSlides, 5000);
}

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slide.length) {
        slideIndex = 1
    } else if (slideIndex < 1) {
        slideIndex = slide.length
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    for (i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(" current", "");

    }
    slide[slideIndex - 1].style.display = "block";
    indicator[slideIndex - 1].className += " current";
}

function currentSlide(index) {
    if (index > slide.length) {
        index = 1
    } else if (index < 1) {
        index = slide.length
    }
    for (i = 0; i < slide.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(" current", "");
    }
    slide[index - 1].style.display = "block";
    indicator[index - 1].className += " current";
}



showSlides();