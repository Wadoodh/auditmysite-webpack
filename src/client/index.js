import isUrl from "is-url";

export default function validateForm() {
  const form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const inputValue = formData.get("website-url");

    if (inputValue.includes("http") || inputValue.includes("https")) {
      // show error
      console.log("remove first part");
      return false;
    }

    if (isUrl("https://" + inputValue)) {
      console.log("valid input");
    } else {
      console.log("invalid input");
    }
  });
}
