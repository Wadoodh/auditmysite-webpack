export default function watchInput() {
  const input = document.getElementById("website-url");
  const formError = document.getElementById("form-error");

  input.addEventListener("input", () => {
    if (formError.classList.contains("display-block")) {
      formError.classList.remove("display-block");
    }
  });
}
