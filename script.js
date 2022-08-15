// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[0];

const firstName = document.getElementById('fname');
const firstNameError = document.getElementsByClassName('error')[0];

const lastName = document.getElementById('lname');
const lastNameError = document.getElementsByClassName('error')[1];

const email = document.getElementById('mail');
const emailError = document.getElementsByClassName('error')[2];

const password = document.getElementById('password');
const passwordError = document.getElementsByClassName('error')[3]

// console.log(passwordError)

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showEmailError();
  }
});

// firstName.addEventListener('input', function (event) {
//   // Each time the user types something, we check if the
//   // form fields are valid.

//   if (firstName.validity.valid) {
//     // In case there is an error message visible, if the field
//     // is valid, we remove the error message.
//     firstNameError.textContent = ''; // Reset the content of the message
//     firstNameError.className = 'error'; // Reset the visual state of the message
//   } else {
//     // If there is still an error, show the correct error
//     showFirstNameError();
//   }
// });

// lastName.addEventListener('input', function (event) {
//   // Each time the user types something, we check if the
//   // form fields are valid.

//   if (lastName.validity.valid) {
//     // In case there is an error message visible, if the field
//     // is valid, we remove the error message.
//     lastNameError.textContent = ''; // Reset the content of the message
//     lastNameError.className = 'error'; // Reset the visual state of the message
//   } else {
//     // If there is still an error, show the correct error
//     showLastNameError();
//   }
// });

// password.addEventListener('input', function (event) {
//   // Each time the user types something, we check if the
//   // form fields are valid.

//   if (password.validity.valid) {
//     // In case there is an error message visible, if the field
//     // is valid, we remove the error message.
//     passwordError.textContent = ''; // Reset the content of the message
//     passwordError.className = 'error'; // Reset the visual state of the message
//   } else {
//     // If there is still an error, show the correct error
//     showPasswordError();
//   }
// });

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showEmailError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  
  if(!firstName.validity.valid) {
      showFirstNameError();
      event.preventDefault();
    }
  
    if(!lastName.validity.valid) {
      showLastNameError();
      event.preventDefault();
    }
  
    if(!password.validity.valid) {
      showPasswordError();
      event.preventDefault();
    }
});

function showEmailError() {
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Looks like this is not an email';
  } else if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}

function showFirstNameError() {
  if(firstName.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    firstNameError.textContent = 'First Name cannot be empty';
  } 

  // Set the styling appropriately
  firstNameError.className = 'error active';
}

function showLastNameError() {
  if(lastName.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    lastNameError.textContent = 'Last Name cannot be empty';
  }

  // Set the styling appropriately
  lastNameError.className = 'error active';
}

function showPasswordError() {
  if(password.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    passwordError.textContent = 'Password cannot be empty';
  }

  // Set the styling appropriately
  passwordError.className = 'error active';
}
