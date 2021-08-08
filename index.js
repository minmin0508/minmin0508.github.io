var modal = document.getElementById("myModal");

// Get the button that opens the modal
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
var content6 = document.getElementById("content6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




// When the user clicks the button, open the modal 

content1.onclick = function() {
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].src = "images/portfolio-1.png";
}

content2.onclick = function() {
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].src = "images/portfolio-2.png";
}

content3.onclick = function() {
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].src = "images/portfolio-3.png";
}

content4.onclick = function() {
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].src = "images/portfolio-4.png";
}

content5.onclick = function() {
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].src = "images/portfolio-5.png";
}

content6.onclick = function() {
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].src = "images/portfolio-6.png";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
