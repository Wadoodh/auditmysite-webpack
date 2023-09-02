import { getWebflowTips } from "../services/fetchWebflowTips";

export default function checkboxListener(checkboxContainer, container) {
  const checkboxItems = document.getElementById(checkboxContainer);
  const manualReviewContainer = document.getElementById(container);
  manualReviewContainer.style.display = "none";

  checkboxItems.addEventListener("change", function (event) {
    event.stopPropagation();

    const showRecs = manualReviewContainer.getElementsByTagName("div");

    const isACheckbox = event.target.type === "checkbox";

    if (!isACheckbox) return;

    if (event.target.checked) {
      const tip = getWebflowTips()
        .getElementById(event.target.id)
        .cloneNode(true);
      manualReviewContainer.append(tip);

      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      manualReviewContainer.querySelector(`#${event.target.id}`).remove();
    }

    if (showRecs.length === 0) {
      manualReviewContainer.style.display = "none";
    } else {
      manualReviewContainer.style.display = "block";
    }
  });
}
