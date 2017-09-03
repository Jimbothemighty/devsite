var index = 1;

$(document).ready(function() {
    showSlides(1);
    //var x = document.getElementById("first");
    //x.click();
    //x.style.display = "block"; 
});

document.onload = function() {
    //var x = document.getElementById("first");
    //x.click();
    //x.style.display = "block"; 
};

function nextSlide(n) {
  showSlides(index += n);
}

function prevSlide(n) {
  showSlides(index += n);
}

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("hideSlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {index = 1} 
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block"; 
  dots[index-1].className += " active";
}