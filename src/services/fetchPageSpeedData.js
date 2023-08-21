import axios from "axios";
import organizeInitialResult from "../utils/organized/organizeInitialResult";
import removeOverlapsAndCombine from "../utils/organized/removeOverlapsAndCombine";
import prepareDataForRender from "../utils/prepareDataForRender";
import pickSpecificRecommendation from "../utils/pickSpecificRecommendation";
import fetchWebflowRecommendations from "./fetchWebflowRecommendations";

const IS_DEV_ENV = process.env.NODE_ENV === "development";

export default async function fetchPageSpeedData(website) {
  const recommendations = await fetchWebflowRecommendations();

  showLoader();

  if (IS_DEV_ENV) {
    const { data: desktop } = await axios.get("http://localhost:4000/data");
    const { data: mobile } = await axios.get("http://localhost:4001/data");

    const desktopResults = organizeInitialResult(desktop[0]);
    const mobileResults = organizeInitialResult(mobile[0]);

    const data = removeOverlapsAndCombine(desktopResults, mobileResults);

    const result = prepareDataForRender(data);

    result.forEach((obj) => {
      for (let key in obj) {
        obj[key].forEach((prop) => {
          pickSpecificRecommendation(recommendations, prop.id);
        });
      }
    });

    // validateForm();
  } else {
    // https://dev--desktop-psi-results--webflow-success.autocode.dev/

    /* const { data } = await axios.get(
      "https://dev--psi-results--webflow-success.autocode.dev/",
      { params: { website } }
    ); */

    const { data: desktopData } = await axios.get(
      "https://dev--desktop-psi-results--webflow-success.autocode.dev/",
      { params: { website, strategy: "desktop" } }
    );

    const { data: mobileData } = await axios.get(
      "https://dev--desktop-psi-results--webflow-success.autocode.dev/",
      { params: { website, strategy: "mobile" } }
    );

    // const { desktop, mobile } = data;
    const { desktop } = desktopData;
    const { mobile } = mobileData;

    const desktopResults = organizeInitialResult(desktop);
    const mobileResults = organizeInitialResult(mobile);

    const value = removeOverlapsAndCombine(desktopResults, mobileResults);

    const result = prepareDataForRender(value);

    // render each recommendation based on PSI data
    result.forEach((obj) => {
      for (let key in obj) {
        obj[key].forEach((prop) => {
          pickSpecificRecommendation(recommendations, prop.id);
        });
      }
    });
  }

  hideLoader();
}

function showLoader() {
  const loader = document.getElementById("loader");
  const form = document.getElementById("form");
  loader.style.display = "block";
  form.style.display = "none";
}

function hideLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
  showResults();
}

function showResults() {
  const results = document.getElementById("results-wrapper");
  results.style.display = "grid";
}
