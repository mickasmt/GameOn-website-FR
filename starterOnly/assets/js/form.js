
/** Form Elements */
const formElt = document.querySelector("#form");
const successMessageElt = document.querySelector("#successMessage");

const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const birthdateElt = document.getElementById("birthdate");
const quantityElt = document.getElementById("quantity");
const cityElt = document.querySelector("input[type=radio]");
const conditionsElt = document.getElementById("checkbox1");

/** Regex Formats */
const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const positiveIntegerFormat = /^\+?(0|[1-9]\d*)$/;

/** Errors Messages */
const errorMessages = {
	lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	email: "Veuillez entrer une adresse email valide.",
	birthdate: "Veuillez entrer une date de naissance valide.",
	quantity: "Veuillez entrer un nombre valide.",
	location: "Veuillez choisir une ville.",
	checkbox: "Veuillez accepter les conditions d'utilisations.",
};


/**
 * EVENTS
 */

// validation form event: SUBMIT
formElt.addEventListener("submit", formValidation);


/**
 * Functions
 */

// Change style if error
function styleError(element) {
  element.classList.remove("input-success");
  element.classList.add("input-error");
}

// Change style if success
function styleSuccess(element) {
  element.classList.remove("input-error");
  element.classList.add("input-success");
}

// Display success message
function displaySuccessMessage() {
  formElt.classList.replace("block", "hidden");
  successMessageElt.classList.replace("hidden", "flex");
}

// manage validation form
function formValidation(e) {
  e.preventDefault();

  
  clearForm();
  displaySuccessMessage();
}
