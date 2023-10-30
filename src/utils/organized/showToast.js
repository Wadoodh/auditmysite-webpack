import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function showToast(message, type = "success") {
  const styles = {
    background: "",
    color: "",
  };

  if (type === "success") {
    styles.background = "#3545ee";
    styles.color = "white";
  } else if (type === "error") {
    styles.background = "#ffa6b8";
    styles.color = "black";
  }

  const options = {
    text: message,
    duration: 5000, // in ms
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: styles,
    onClick: function () {}, // Callback after click
  };

  Toastify(options).showToast();
}
