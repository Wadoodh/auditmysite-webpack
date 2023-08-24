export default function showError(message) {
  const formError = document.getElementById("form-error");
  formError.textContent = message;
  formError.classList.add("display-block");
}
