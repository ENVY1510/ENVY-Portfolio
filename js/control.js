// JavaScript Document
var typed = new Typed('.element', {
  strings: ["Web Designer.", "Artist.", "Apps Designer.","Film Maker","Graphic Designer."],
  typeSpeed: 20,
  backSpeed: 50,
  loop: true,
});

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

$('.counter').countUp();

AOS.init();


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}