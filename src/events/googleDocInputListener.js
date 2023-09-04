export default function googleDocInputListener() {
  const input = document.getElementById("google-doc-link");
  const textLink = document.getElementById("google-doc-file-link");
  textLink.target = "_blank";

  input.addEventListener("input", (event) => {
    textLink.textContent = event.target.value;
    textLink.href = event.target.value;

    event.target.value.length === 0
      ? (textLink.style.display = "none")
      : (textLink.style.display = "block");
  });
}
