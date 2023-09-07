import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function showToast(message) {
  const options = {
    text: message,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#3545ee",
    },
    onClick: function () {}, // Callback after click
  };

  Toastify(options).showToast();
}
