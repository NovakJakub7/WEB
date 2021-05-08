var scrollBtn = document.getElementsByClassName("scroll-up-btn");

var rootElement = document.documentElement

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.90 ) {
    scrollBtn[0].style.display = "flex";
  } else {
    scrollBtn[0].style.display = "none";
  }
}

document.addEventListener("scroll", handleScroll)

function scrollUp() {
  document.documentElement.scrollTop = 0;
}


var slideIndex = 0;

function toNextSlide() {
  showSlide(slideIndex+1);
}

function toPrevSlide() {
  showSlide(slideIndex-1);
}

function showSlide(n) {
  var i = 0;
  var slides = document.getElementsByClassName("testimonials-article");

  if (n >= slides.length) {
    slideIndex = 0;
  }    
  else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  else {
    slideIndex = n;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
}
