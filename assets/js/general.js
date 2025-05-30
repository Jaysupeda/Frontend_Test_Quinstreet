document.addEventListener("DOMContentLoaded", () => {
  // Background color change every 5 seconds
  const body = document.body;
  const colors = ["#ECF8FB", "#EFEFEF"];
  let currentColorIndex = 0;

  function transitionBackground() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[currentColorIndex];
  }
  setInterval(transitionBackground, 5000);

  // Form Validation
  const form = document.getElementById("offerForm");
  const submitButton = document.getElementById("submitButton");
  const nameInput = document.getElementById("name");
  const stateInput = document.getElementById("state");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");

  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");

  const errorColor = "#D50303";
  const defaultBorderColor = "#ddd";

  // --- Helper Functions for Validation and Styling ---

  function showError(inputElement, errorElement, message) {
    inputElement.classList.add("error");
    inputElement.style.borderColor = errorColor;
    errorElement.textContent = message;
  }

  function clearError(inputElement, errorElement) {
    inputElement.classList.remove("error");
    inputElement.style.borderColor = defaultBorderColor;
    errorElement.textContent = "";
  }

  function validateName() {
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, nameError, "Name must be at least 2 characters.");
      nameError.style.display = "block";
      return false;
    } else {
      clearError(nameInput, nameError);
      nameError.style.display = "none";
      return true;
    }
  }

  function validatePhone() {
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneInput.value.trim()) {
      showError(phoneInput, phoneError, "Phone number is required.");
      phoneError.style.display = "block";
      return false;
    } else if (!phonePattern.test(phoneInput.value.trim())) {
      showError(
        phoneInput,
        phoneError,
        "Phone number must be in (XXX) XXX-XXXX format."
      );
      phoneError.style.display = "block";
      return false;
    } else {
      clearError(phoneInput, phoneError);
      phoneError.style.display = "none";
      return true;
    }
  }

  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError(emailInput, emailError, "Email address is required.");
      emailError.style.display = "block";
      return false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, emailError, "Please enter a valid email address.");
      emailError.style.display = "block";
      return false;
    } else {
      clearError(emailInput, emailError);
      emailError.style.display = "none";
      return true;
    }
  }

  function validateState() {
    clearError(stateInput, stateError);
    return true;
  }

  nameInput.addEventListener("input", validateName);
  phoneInput.addEventListener("input", () => {
    let value = phoneInput.value.replace(/\D/g, "");
    let formattedValue = "";

    if (value.length > 0) {
      formattedValue += "(" + value.substring(0, 3);
    }
    if (value.length > 3) {
      formattedValue += ") " + value.substring(3, 6);
    }
    if (value.length > 6) {
      formattedValue += "-" + value.substring(6, 10);
    }
    phoneInput.value = formattedValue;

    validatePhone();
  });
  emailInput.addEventListener("input", validateEmail);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Run all validations
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();

    const isFormValid = isNameValid && isPhoneValid && isEmailValid;

    if (!isFormValid) {
      console.log("Form has validation errors. Submission aborted.");
      return;
    }

    console.log("Form is valid. Attempting submission...");

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Even if the response isn't 'ok' (which it won't be as per instructions),
      // we proceed to change the button state to 'Submitted'.
      console.log(
        "Submission attempt complete. (Expected error from endpoint)"
      );

      // Simulate success for demonstration purposes as per requirement
      // This block will always run after the fetch call completes (or errors)
      submitButton.textContent = "Submitted";
      // Keep the button disabled to prevent further submissions
      submitButton.disabled = true;

      // Optionally, clear the form after submission attempt
      form.reset();
      // And clear any visual error messages from previous inputs
      document
        .querySelectorAll(".error-message")
        .forEach((el) => (el.textContent = ""));
      document
        .querySelectorAll("input")
        .forEach((input) => (input.style.borderColor = defaultBorderColor));
    } catch (error) {
      // This catch block will execute because the endpoint is designed to fail.
      // We still fulfill the requirement of changing the button to "Submitted" and disabling it.
      console.error("Submission failed due to:", error);
      console.log(
        'Button state will still be set to "Submitted" as per requirement.'
      );

      submitButton.textContent = "Submitted";
      submitButton.disabled = true;

      // Optionally, you might want to show a general error message to the user
      // like "Submission failed, but we've recorded your entry." if that's the intended UX.
      // For now, adhering strictly to "change button to Submitted and do not allow any more submissions."
      // You might add an alert or a message outside the form:
      // alert('There was an issue submitting your form, but your entry has been noted.');
      // Or display a div with a message:
      // document.getElementById('submissionStatus').textContent = 'Submission Failed. Please contact support if you believe this is an error.';
    }
  });
});
