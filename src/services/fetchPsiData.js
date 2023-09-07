import axios from "axios";
import removeOverlapsAndCombine from "../utils/organized/removeOverlapsAndCombine";
import organizeInitialResult from "../utils/organized/organizeInitialResult";
import prepareDataForRender from "../utils/prepareDataForRender";
import pickSpecificRecommendation from "../utils/pickSpecificRecommendation";
import checkboxListener from "../events/checkboxListener";
import exportPdfListener from "../events/exportPdfListener";
import confirmExit from "../utils/organized/confirmExit";
import googleDocInputListener from "../events/googleDocInputListener";

// global variable
const IS_DEV_ENV = process.env.NODE_ENV === "development";

export default async function fetchPsiData(website) {
  showLoader();

  if (IS_DEV_ENV) {
    const { data: desktop } = await axios.get("http://localhost:4000/data");
    const { data: mobile } = await axios.get("http://localhost:4001/data");

    const desktopResults = organizeInitialResult(desktop[0]);
    const mobileResults = organizeInitialResult(mobile[0]);

    const data = removeOverlapsAndCombine(desktopResults, mobileResults);

    const result = prepareDataForRender(data);

    // check size of result
    // console.log(new TextEncoder().encode(JSON.stringify(result)).length);

    result.forEach((obj) => {
      for (let key in obj) {
        obj[key].forEach((prop) => {
          pickSpecificRecommendation(prop);
        });
      }
    });
  } else {
    const { data: desktopData } = await axios.get(
      "https://dev--desktop-psi-results--webflow-success.autocode.dev/",
      { params: { website, strategy: "desktop" } }
    );

    const { data: mobileData } = await axios.get(
      "https://dev--desktop-psi-results--webflow-success.autocode.dev/",
      { params: { website, strategy: "mobile" } }
    );

    const { desktop } = desktopData;
    const { mobile } = mobileData;

    const desktopResults = organizeInitialResult(desktop);
    const mobileResults = organizeInitialResult(mobile);

    const uniquePsiResults = removeOverlapsAndCombine(
      desktopResults,
      mobileResults
    );

    const result = prepareDataForRender(uniquePsiResults);

    // render each recommendation based on PSI data
    result.forEach((obj) => {
      for (let key in obj) {
        obj[key].forEach((prop) => {
          pickSpecificRecommendation(prop);
        });
      }
    });
  }

  hideLoader();

  checkboxListener("manual-review-items", "manual-review");
  checkboxListener("screaming-frog-items", "screaming-frog");
  exportPdfListener();
  googleDocInputListener();
  if (!IS_DEV_ENV) confirmExit();
}

function showLoader() {
  const loader = document.getElementById("loader");
  const form = document.getElementById("form");
  form.style.display = "none";
  loader.style.display = "flex";
}

function hideLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
  hideSearchWrap();
  showResults();
}

function hideSearchWrap() {
  const searchWrap = document.getElementById("form-wrap");
  searchWrap.style.display = "none";
}

function showResults() {
  const results = document.getElementById("results-wrapper");
  results.style.display = "grid";
  listenToResultsContainer();
}

function listenToResultsContainer() {
  const results = document.getElementById("results");
  results.addEventListener("click", (event) => {
    if (event.target.id !== "edit-audit") return;

    const auditEditMode =
      event.target.parentNode.getAttribute("contenteditable");

    event.target.parentNode.setAttribute(
      "contenteditable",
      auditEditMode === "true" ? false : true
    );
  });
}

function scrollToBottomOfPage() {
  const scrollBtn = document.getElementById("scroll-button");

  // scrollBtn.addEventListener("click", () => {});
}

/* async function pdfTest(htmlString) {
  const { data } = await axios.post(
    "https://dev--make-pdf--webflow-success.autocode.dev/",
    { markup: htmlString }
  );

  console.log(data);
  window.open(data.FileUrl, "_blank");
} */

// pdfTest();
