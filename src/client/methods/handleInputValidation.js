import isUrl from "is-url";
import showError from "./showError";

export default function handleInputValidation(inputValue) {
  if (inputValue.length === 0) {
    showError("Enter a website");
    return false;
  }

  if (inputValue.includes("http") || inputValue.includes("https")) {
    showError("Remove protocol i.e., http or https");
    return false;
  }

  if (!isUrl("https://" + inputValue)) {
    showError("Invalid format provided");
    return false;
  }

  return true;
}
