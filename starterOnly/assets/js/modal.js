
/** DOM Elements */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#closeModal");


/**
 * EVENTS
 */

// launch modal event: CLICK
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal event: CLICK
closeModalBtn.forEach((elt) => elt.addEventListener("click", closeModal));


/**
 * Functions
 */

// toggle button in responsive navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form && show form / hide success message
function closeModal() {
  modalbg.style.display = "none";
  formElt.classList.remove("hidden");
  formElt.classList.add("block");

  successMessageElt.classList.remove("flex");
  successMessageElt.classList.add("hidden");
}
