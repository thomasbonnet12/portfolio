// JS for Portfolio Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-projects");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

const img = document.querySelector(".imgqueryselector");

img.addEventListener("click", (event)=> {
  console.log("Its working !");
  const list = document.querySelector(".iconqueryselector");
  list.classList.toggle("aos-animate");
});

// document.querySelector('.imgqueryselector').addEventListener('click', function() {
//   document.querySelector('.hhidden').classList.toggle('active');
// });
