import axios from "axios";
import removeOverlapsAndCombine from "../utils/organized/removeOverlapsAndCombine";
import organizeInitialResult from "../utils/organized/organizeInitialResult";
import prepareDataForRender from "../utils/prepareDataForRender";
import pickSpecificRecommendation from "../utils/pickSpecificRecommendation";
import checkboxListener from "../events/checkboxListener";
import exportPdfListener from "../events/exportPdfListener";
import confirmExit from "../utils/organized/confirmExit";
import googleDocInputListener from "../events/googleDocInputListener";
import showToast from "../utils/organized/showToast";

// global variable
const IS_DEV_ENV = process.env.NODE_ENV === "development";

export default async function fetchPsiData(website) {
  showLoader();

  if (IS_DEV_ENV) {
    showToast("Measuring Desktop site  ", "success");

    const { data: desktop } = await axios.get("http://localhost:4123/data");
    const { data: mobile } = await axios.get("http://localhost:4567/data");

    const desktopResults = organizeInitialResult(desktop[0].desktop);
    const mobileResults = organizeInitialResult(mobile[0].mobile);

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

    tabChangeForDev();
  } else {
    const loaderDesktop = document.getElementById("loader-desktop");
    const loaderMobile = document.getElementById("loader-mobile");
    const pageSpeedDataApi =
      "https://pb62yjznsllxruikx4e57rlf4u0bydzq.lambda-url.us-east-2.on.aws/";

    loaderDesktop.style.opacity = "100%";

    showToast("Can take longer for larger sites ", "success");

    const [desktopData, desktopError] = await fetchData(pageSpeedDataApi, {
      website,
      strategy: "desktop",
    });

    loaderMobile.style.opacity = "100%";

    // showToast("Measuring Mobile site  ");

    const [mobileData, mobileError] = await fetchData(pageSpeedDataApi, {
      website,
      strategy: "mobile",
    });

    const { desktop } = desktopData;
    const { mobile } = mobileData;

    const domain = desktop.id.replace("https://", "").replace("/", "");
    const desktopScore = (
      desktop.lighthouseResult.categories.performance.score * 100
    ).toFixed();
    const mobileScore = (
      mobile.lighthouseResult.categories.performance.score * 100
    ).toFixed();

    addToAnalytics(domain, desktopScore, mobileScore);

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

  async function addToAnalytics(domain, desktopScore, mobileScore) {
    try {
      await fetch(
        "https://ebdeqjkdi63u6gzbb4eprrxf5u0pvlwn.lambda-url.us-east-2.on.aws/",
        {
          method: "POST",
          body: JSON.stringify({
            website: domain,
            desktopScore: parseInt(desktopScore),
            mobileScore: parseInt(mobileScore),
          }),
        }
      );
    } catch (error) {
      showToast("Error adding analytics data", "error");
    }
  }

  const loaderFinished = document.getElementById("loader-finished");
  loaderFinished.style.opacity = "100%";

  await new Promise((res, rej) => {
    setTimeout(() => {
      return res();
    }, 2000);
  });

  hideLoader();

  insertDomainTestedIntoAudit();
  // checkboxListener("manual-review-items", "manual-review");
  checkboxListener("project-settings-form", "project-settings-container");
  checkboxListener("designer-form", "designer-container");
  checkboxListener("screaming-frog-form", "screaming-frog-container");
  // screaming-frog-form
  exportPdfListener();
  googleDocInputListener();
  if (!IS_DEV_ENV) confirmExit();
  document.body.style.backgroundColor = "#eef7ff";
}

async function fetchData(url, payload) {
  try {
    const { data } = await axios.get(url, { params: payload });
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
}

function tabChangeForDev() {
  const tabLinks = document.querySelectorAll(".tabs-link");
  const tabsContent = document.querySelector(".tabs-content");

  tabLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
      const tabValue = event.currentTarget.attributes["data-w-tab"].value;
      const allPanes = tabsContent.querySelectorAll(`[data-w-tab]`);
      allPanes.forEach((pane) => pane.classList.remove("w--tab-active"));

      tabsContent
        .querySelector(`[data-w-tab="${tabValue}"]`)
        .classList.add("w--tab-active");
    });
  });
}

function insertDomainTestedIntoAudit() {
  const inputForWebsiteUrl = document.getElementById("website-url").value;
  const domainToInsert = document.getElementById("domain");
  domainToInsert.textContent = inputForWebsiteUrl;
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

/* const { data: desktopData } = await axios.get(
      "https://dev--desktop-psi-results--webflow-success.autocode.dev/",
      { params: { website, strategy: "desktop" } }
    ); */

/* const { data: mobileData } = await axios.get(
      "https://dev--desktop-psi-results--webflow-success.autocode.dev/",
      { params: { website, strategy: "mobile" } }
    ); */

// showToast("Measuring Desktop site   ");
// new comment...
