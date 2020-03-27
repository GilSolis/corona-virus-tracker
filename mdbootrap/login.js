var firstNameInput = document.querySelector("#defaultRegisterFormFirstName");
var lastNameInput = document.querySelector("#defaultRegisterFormLastName");
var emailInput = document.querySelector("#defaultRegisterFormEmail");
var passwordInput = document.querySelector("#defaultRegisterFormPassword");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }
  

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  }
  console.log(user);
  if (user.firstName === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastName === "") {
    displayMessage("error", "Last name cannot be blank");
  } else if (user.email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (user.password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
localStorage.setItem("user", JSON.stringify(user));   
};
})
	
