// validation.js

export function validateName(name) {
  if (!name.trim()) return "Name field empty, please enter your name.";
  if (!name.trim().includes(" ")) return "Please enter both your first and last name.";
  return "";
}

export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return "Email field is empty, please enter your email.";
  if (!regex.test(email)) return "Please enter a valid email address.";
  return "";
}

export function validateMessage(message) {
  if (!message.trim()) return "Message field is empty, please fill out a message.";
  if (message.length < 10) return "Message is too short (min 10 characters).";
  if (message.length > 500) return "Message is too long (max 500 characters).";
  return "";
}