import { getWebflowTips } from "../services/fetchWebflowTips";

export default function checkboxListener(checkboxContainer, container) {
  const checkboxItems = document.getElementById(checkboxContainer);
  const siteAuditSection = document.getElementById(container);
  siteAuditSection.style.display = "none";
  // const resultsContainer = document.getElementById("results-left");
  const googleDocInput = document.getElementById("google-doc-link");

  checkboxItems.addEventListener("change", function (event) {
    event.stopPropagation();

    // const showRecs = siteAuditSection.getElementsByTagName("div");
    const showRecs = siteAuditSection.getElementsByClassName("result-block");

    const isACheckbox = event.target.type === "checkbox";

    if (!isACheckbox) return;

    if (event.target.checked) {
      const tip = getWebflowTips()
        .getElementById(event.target.id)
        .cloneNode(true);

      /* tip.querySelector(".results-title").setAttribute("contenteditable", true);
      tip.querySelector(".result-rte").setAttribute("contenteditable", true); */

      siteAuditSection.append(tip);
    } else {
      siteAuditSection.querySelector(`#${event.target.id}`).remove();
    }

    if (showRecs.length === 0) {
      siteAuditSection.style.display = "none";
    } else {
      siteAuditSection.style.display = "grid";
    }

    siteAuditSection.scrollIntoView(false);
  });
}

// && googleDocInput.value.length === 0

// helper functions

/*    setUpGoogleInputListener();

    function setUpGoogleInputListener() {
      googleDocInput.addEventListener("input", (event) => {
        const value = event.target.value;

        if (value.length === 0 && showRecs.length === 0) {
          siteAuditSection.style.display = "none";
        } else {
          siteAuditSection.style.display = "block";
        }

        siteAuditSection.scrollIntoView(true);
      });
    } */

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
