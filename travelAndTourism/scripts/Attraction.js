var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";

}
// readmore read less in description
function readmore() {
  var dots = document.getElementById("Read");
  var moreText = document.getElementById("more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}
function readless() {
  var dots = document.getElementById("Read");
  var moreText = document.getElementById("more");
  dots.style.display = "inline";
  moreText.style.display = "none";
}
// readmore read less in description
function readmore1() {
  var dots = document.getElementById("Read1");
  var moreText = document.getElementById("more1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}
function readless1() {
  var dots = document.getElementById("Read1");
  var moreText = document.getElementById("more1");
  dots.style.display = "inline";
  moreText.style.display = "none";
}
// readmore read less in description
function readmore2() {
  var dots = document.getElementById("Read2");
  var moreText = document.getElementById("more2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}
function readless2() {
  var dots = document.getElementById("Read2");
  var moreText = document.getElementById("more2");
  dots.style.display = "inline";
  moreText.style.display = "none";
}
//When the user clicks on the button, showing the dropdown content 
// Close the dropdown if the user clicks outside of it
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";

    }
  });
}



document.querySelector(".check-availability").addEventListener('click', () => {
  window.location.href = './booking.html';
})
let hotelUrl = "https://636a539ec07d8f936d9a5d5e.mockapi.io/awadhStore/roamAround"
let id = localStorage.getItem("city-id");
let bookingData = JSON.parse(localStorage.getItem("Booking-Details")) || [];
hotelBook(id);

async function hotelBook(id) {
  let res = await fetch(`${hotelUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  let data = await res.json();

  console.log(data)
  document.querySelector('.contimg').src = data.image;
  document.querySelector('.title-name').innerHTML = data.title;
  document.querySelector('.below-title-name').innerHTML = `By Yo Tours ${data.location}`;
  document.querySelector('.describe').innerHTML = data.desc;
  document.querySelector('#price').innerHTML = data.price;

}

