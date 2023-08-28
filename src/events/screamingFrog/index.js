export default function screamingFrogTips(webflowTips) {
  const checkboxItems = document.getElementById("checkbox-items");

  checkboxItems.addEventListener("change", function (event) {
    event.stopPropagation();

    const isACheckbox = event.target.classList.contains("w-checkbox-input");
    const manualReviewContainer = document.getElementById("manual-review");

    if (!isACheckbox) return;

    if (event.target.checked) {
      const item = webflowTips.getElementById(event.target.id).cloneNode(true);
      manualReviewContainer.append(item);
    } else {
      manualReviewContainer.querySelector(`#${event.target.id}`).remove();
    }
  });
}
