const fakeSubmitButton = document.querySelector("#fake-submit");
const websiteInput = document.querySelector("#website");
const formErrorMsg = document.querySelector("#form-error");
const isValidDomain = require("is-valid-domain");

// add to Webflow form in case someone uncovers the form submit button and clicks it

function validateForm() {
  // prevent default submission on wf form
  function preventDefaultSubmit() {
    return false;
  }

  preventDefaultSubmit();

  websiteInput.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (key === "enter") getAuditData();
  });

  websiteInput.addEventListener("blur", (event) => {
    const isInputValid = validURL(event.target.value);

    !isInputValid ? showFormError("Invalid input") : removeFormError();
  });

  fakeSubmitButton.addEventListener("click", getAuditData);

  function showFormError(errorMessage) {
    formErrorMsg.textContent = errorMessage;
    formErrorMsg.style.display = "block";
  }

  function removeFormError() {
    formErrorMsg.textContent = "";
    formErrorMsg.style.display = "none";
  }

  function disableFormSubmitButton() {
    fakeSubmitButton.style.pointerEvents = "none";
    fakeSubmitButton.style.opacity = "50%";
  }

  function validURL(str) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator

    return !!pattern.test(str);
  }

  async function getAuditData() {
    if (websiteInput.value.length === 0) {
      console.log("field cannot be blank");
      showFormError("field cannot be blank");
      return;
    } else if (!validURL(websiteInput.value)) {
      console.log("enter correct format for website");
      showFormError(
        `Website format should be like "www.domain.com" or "domain.com"`
      );
      return;
    }

    // disable button if validation passed
    disableFormSubmitButton();

    console.log("Loading...");

    if (PRODUCTION) {
      const { data } = await axios.get(
        "https://api-for-webflow.autocode.dev/auditmywebflowsite@dev/",
        { params: { website: websiteInput.value } }
      );

      console.log(data);
      return data;
    }
  }
}

export default validateForm;
