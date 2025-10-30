import { validateName, validateEmail, validateMessage } from "./validation.js";

document.addEventListener("DOMContentLoaded", () => {

  // get all the stuff from the form
  let form = document.getElementById("contact-form");
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let messageInput = document.getElementById("message");
  let verifyBtn = document.getElementById("verify-btn");
  let sendBtn = document.getElementById("send-btn");
  let errorsDiv = document.getElementById("errors");

  // when verify button is clicked
  verifyBtn.addEventListener("click", () => {
    let errors = [];

    // check name
    let nameError = validateName(nameInput.value);
    if (nameError) {
      errors.push(nameError);
    }

    // check email
    let emailError = validateEmail(emailInput.value);
    if (emailError) {
      errors.push(emailError);
    }

    // check message
    let messageError = validateMessage(messageInput.value);
    if (messageError) {
      errors.push(messageError);
    }

    // show errors or success
    if (errors.length > 0) {
      errorsDiv.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
      sendBtn.disabled = true;
    } else {
      errorsDiv.innerHTML = "<p style='color: green;'>Looks good! You can send your form now.</p>";
      sendBtn.disabled = false;
    }
  });

  // stop form if not verified first
  form.addEventListener("submit", (e) => {
    if (sendBtn.disabled) {
      e.preventDefault();
      alert("Please verify your form before sending.");
    }
  });
});
