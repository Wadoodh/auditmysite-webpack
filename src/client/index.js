import isUrl from "is-url";
import fetchPageSpeedData from "../services/fetchPageSpeedData";

const IS_DEV_ENV = process.env.NODE_ENV === "development";

export default function validateFormAndRender() {
  // listen for changes on input to affect form error state
  watchInput();

  // dev code
  if (IS_DEV_ENV) {
    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      handleFormInput(event);
    });
  } else {
    Webflow.push(function () {
      $("form").submit(function (event) {
        handleFormInput(event);
        return false;
      });
    });
  }
}

function handleFormInput(event) {
  const formData = new FormData(event.target);
  const inputValue = formData.get("website-url");
  const isInputValid = handleInputValidation(inputValue);
  if (!isInputValid) return;
  fetchPageSpeedData(inputValue);
}

function watchInput() {
  const input = document.getElementById("website-url");
  const formError = document.getElementById("form-error");

  input.addEventListener("input", () => {
    if (formError.classList.contains("display-block")) {
      formError.classList.remove("display-block");
    }
  });
}

function handleInputValidation(inputValue) {
  if (inputValue.length === 0) {
    showError("Enter a website");
    return false;
  }

  if (inputValue.includes("http") || inputValue.includes("https")) {
    // show error
    showError("Remove protocol i.e., http or https");
    return false;
  }

  if (!isUrl("https://" + inputValue)) {
    showError("Invalid format provided");
    return false;
  }

  return true;
}

function showError(message) {
  const formError = document.getElementById("form-error");
  formError.textContent = message;
  formError.classList.add("display-block");
}
