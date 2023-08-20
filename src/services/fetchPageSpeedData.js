import axios from "axios";
import organizeInitialResult from "../utils/organized/organizeInitialResult";
import removeOverlapsAndCombine from "../utils/organized/removeOverlapsAndCombine";
import prepareDataForRender from "../utils/prepareDataForRender";
import pickSpecificRecommendation from "../utils/pickSpecificRecommendation";
import fetchWebflowRecommendations from "./fetchWebflowRecommendations";

const IS_DEV_ENV = process.env.NODE_ENV === "development";

export default async function fetchPageSpeedData(website) {
  const recommendations = await fetchWebflowRecommendations();

  if (!IS_DEV_ENV) {
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
    const { data } = await axios.get(
      "https://dev--psi-results--webflow-success.autocode.dev/",
      { params: { website } }
    );

    const { desktop, mobile } = data;

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
}
