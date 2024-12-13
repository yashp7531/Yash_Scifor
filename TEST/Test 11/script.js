// First Feature: Array Builder
let myArray = [];

// Update the display function
function updateArrayDisplay() {
  document.getElementById("array-display").textContent = `[${myArray.join(
    ", "
  )}]`;
}

// Add custom input to the array
document.getElementById("add-to-array-btn").addEventListener("click", () => {
  const input = document.getElementById("array-input").value.trim();
  if (input) {
    myArray.push(input); // Add the user's input
  }
  myArray.push("VOLVO"); // Always add "VOLVO"
  updateArrayDisplay(); // Update the UI
  document.getElementById("array-input").value = ""; // Clear input field
  console.log("Updated Array:", myArray); // Log the updated array
});

// Second Feature: Uppercase Converter
document.getElementById("text-area").addEventListener("input", (event) => {
  const text = event.target.value;
  const uppercaseText = text.toUpperCase();
  document.getElementById("uppercase-output").textContent = uppercaseText; // Update UI
  console.log("Uppercase Output:", uppercaseText); // Log the result
});
