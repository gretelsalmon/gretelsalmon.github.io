// formHandler.js
import { validateName, validateEmail, validateMessage } from './validation.js';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const verifyBtn = document.getElementById("verify-btn");
  const sendBtn = document.getElementById("send-btn");
  const errorsDiv = document.getElementById("errors");

  verifyBtn.addEventListener("click", () => {
    const errors = [];

    const nameError = validateName(nameInput.value);
    if (nameError) errors.push(nameError);

    const emailError = validateEmail(emailInput.value);
    if (emailError) errors.push(emailError);

    const messageError = validateMessage(messageInput.value);
    if (messageError) errors.push(messageError);

    if (errors.length) {
      errorsDiv.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
      sendBtn.disabled = true;
    } else {
      errorsDiv.innerHTML = "<p style='color:green;'>All fields look good! You can send your message.</p>";
      sendBtn.disabled = false;
    }
  });

  // block submission until correctly filled out
  form.addEventListener("submit", (e) => {
    if (sendBtn.disabled) {
      e.preventDefault();
      alert("Please check and verify your form before sending.");
    }
  });
});
