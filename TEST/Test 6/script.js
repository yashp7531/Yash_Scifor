const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const strengthMessage = document.getElementById("strengthMessage");

const requirements = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /[0-9]/,
  symbol: /[^A-Za-z0-9]/,
};

passwordField.addEventListener("input", function () {
  const value = passwordField.value;
  const feedback = document.getElementById("passwordSuggestions");

  document.getElementById("uppercase").style.color =
    requirements.uppercase.test(value) ? "#3adb76" : "#cc4b37";
  document.getElementById("lowercase").style.color =
    requirements.lowercase.test(value) ? "#3adb76" : "#cc4b37";
  document.getElementById("number").style.color = requirements.number.test(
    value
  )
    ? "#3adb76"
    : "#cc4b37";
  document.getElementById("symbol").style.color = requirements.symbol.test(
    value
  )
    ? "#3adb76"
    : "#cc4b37";

  // Password strength
  let strength = 0;
  if (requirements.uppercase.test(value)) strength++;
  if (requirements.lowercase.test(value)) strength++;
  if (requirements.number.test(value)) strength++;
  if (requirements.symbol.test(value)) strength++;

  if (strength === 4 && value.length >= 8) {
    strengthMessage.textContent = "Strong 💪";
    strengthMessage.className = "strength-message strong";
  } else if (strength >= 3) {
    strengthMessage.textContent = "Medium 🙂";
    strengthMessage.className = "strength-message medium";
  } else {
    strengthMessage.textContent = "Weak 😟";
    strengthMessage.className = "strength-message weak";
  }
});

// Password confirmation and other form validation
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Other validations as before
    if (passwordField.value !== confirmPasswordField.value) {
      confirmPasswordField.classList.add("error");
      confirmPasswordField.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      confirmPasswordField.classList.remove("error");
      confirmPasswordField.nextElementSibling.style.display = "none";
    }

    if (isValid) {
      alert("Form submitted successfully!");
      document.getElementById("registrationForm").reset();
      strengthMessage.textContent = "";
    }
  });
