import { getWebflowTips } from "../services/fetchWebflowTips";

export default function checkboxListener(checkboxContainer, container) {
  const checkboxItems = document.getElementById(checkboxContainer);
  const siteAuditSection = document.getElementById(container);
  siteAuditSection.style.display = "none";
  const resultsContainer = document.getElementById("results-left");

  checkboxItems.addEventListener("change", function (event) {
    event.stopPropagation();

    const showRecs = siteAuditSection.getElementsByTagName("div");

    const isACheckbox = event.target.type === "checkbox";

    if (!isACheckbox) return;

    if (event.target.checked) {
      const tip = getWebflowTips()
        .getElementById(event.target.id)
        .cloneNode(true);

      siteAuditSection.append(tip);
    } else {
      siteAuditSection.querySelector(`#${event.target.id}`).remove();
    }

    if (showRecs.length === 0) {
      siteAuditSection.style.display = "none";
    } else {
      siteAuditSection.style.display = "block";
    }

    siteAuditSection.scrollIntoView(false);
  });
}

/* window.scrollTo({
      left: 0,
      top: resultsContainer.scrollHeight,
      behavior: "smooth",
    }); */

/* window.scrollTo({
        left: 0,
        top: resultsContainer.scrollHeight,
        behavior: "smooth",
      }); */

/* window.scrollTo(
        0,
        document.documentElement.scrollHeight || document.body.scrollHeight
      ); */
