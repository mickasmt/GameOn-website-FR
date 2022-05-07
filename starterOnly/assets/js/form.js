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
const birthdateFormat =
  /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const positiveIntegerFormat = /^\+?(0|[1-9]\d*)$/;

/** Errors Messages */
const errorMessages = {
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide.",
  city: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};


/**=========================
 * EVENTS
 * =========================
 */

// validation form event: SUBMIT
formElt.addEventListener("submit", formValidation);


/**=========================
 * Functions
 * =========================
 */

// Display success message
function displaySuccessMessage() {
  formElt.classList.replace("block", "hidden");
  successMessageElt.classList.replace("hidden", "flex");
}

// Clear form after validation form if success
function clearForm() {
  firstElt.value = "";
  lastElt.value = "";
  emailElt.value = "";
  birthdateElt.value = "";
  quantityElt.value = "";
  conditionsElt.checked = false;

  // clear city radio button 
  document.querySelector("input[type=radio]:checked").checked = false;
}

/** check if a string matches an email regex format
 * @param {string} str string to check
 * @param {string} strFormat Regex format
 * @returns {boolean}
 */
 function isStringMatchRegexFormat(str, strFormat) {
  return strFormat.test(str);
}

/** check if at least one radio button is checked
 * @returns {boolean}
 */
function isRadioChecked() {
  return document.querySelectorAll("input[type=radio]:checked").length > 0;
}

/** check if the current length is >= to a minimum length
 * @param {number} currentLength the length to check
 * @param {number} minimumLength the minimum length
 * @returns {boolean}
 */
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength;
}

/**=========================
 * Functions Input & Form
 * =========================
 */

/** check if firstname input is valid
 * @returns {boolean}
 */
function isFirstValid() {
  let inputFirst = new Input(firstElt, errorMessages.firstName);
  let isValid = isLongEnough(firstElt.value.length, 2);
  inputFirst.removeOrDisplayError(isValid);

  return isValid;
}

/** check if lastname input is valid
 * @returns {boolean}
 */
function isLastValid() {
  let inputLast = new Input(lastElt, errorMessages.lastName);
  let isValid = isLongEnough(lastElt.value.length, 2);
  inputLast.removeOrDisplayError(isValid);

  return isValid;
}

/** Check if email input is valid
 * @returns {boolean}
 */
function isEmailValid() {
  let inputEmail = new Input(emailElt, errorMessages.email);
  let isValid = isStringMatchRegexFormat(emailElt.value, mailFormat);
  inputEmail.removeOrDisplayError(isValid);

  return isValid;
}

/** Check if birthdate input is valid
 * @returns {boolean}
 */
function isBirthdateValid() {
  let inputBirthdate = new Input(birthdateElt, errorMessages.birthdate);
  let isValid = isStringMatchRegexFormat(
    birthdateElt.value,
    birthdateFormat
  );
  inputBirthdate.removeOrDisplayError(isValid);

  return isValid;
}

/** Check if quantity input is valid
 * @returns {boolean}
 */
function isQuantityValid() {
  let inputQuantity = new Input(quantityElt, errorMessages.quantity);
  let isValid = isStringMatchRegexFormat(
    quantityElt.value,
    positiveIntegerFormat
  );
  inputQuantity.removeOrDisplayError(isValid);

  return isValid;
}

/** Check if city radio buttons are valid
 * @returns {boolean}
 */
function isCityValid() {
  let inputCity = new Input(cityElt, errorMessages.city);
  let isValid = isRadioChecked();
  inputCity.removeOrDisplayError(isValid);

  return isValid;
}

/** Check if conditions checkbox is valid
 * @returns {boolean}
 */
function isConditionsValid() {
  let inputConditions = new Input(conditionsElt, errorMessages.checkbox);
  let isValid = conditionsElt.checked;
  inputConditions.removeOrDisplayError(isValid);

  return isValid;
}

/** Manage validation form */
function formValidation(e) {
  e.preventDefault();

  let firstname = isFirstValid();
  let lastname = isLastValid();
  let email = isEmailValid();
  let birthdate = isBirthdateValid();
  let quantity = isQuantityValid();
  let city = isCityValid();
  let conditions = isConditionsValid();

  let isFormValid = firstname && lastname && email && birthdate && quantity && city && conditions;

  if (isFormValid) {
    clearForm();
    displaySuccessMessage();
  }
}
