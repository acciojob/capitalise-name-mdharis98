//your JS code here. If required.
// Select the input field by its id
const inputField = document.getElementById('fname');

// Add an event listener for the 'blur' event (triggered when input loses focus)
inputField.addEventListener('blur', function() {
  // Convert the input value to uppercase
  inputField.value = inputField.value.toUpperCase();
});
