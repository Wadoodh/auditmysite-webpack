// COMMON **********
import validateFormAndRender from "./client/validateFormAndRender";

// DEV **********
import fetchWebflowCssFile from "./utils/fetchWebflowCssFile";
import { fetchWebflowTips } from "./services/fetchWebflowTips";
import fetchHtmlPageForDev from "./services/fetchHtmlPageForDev";

const IS_DEV_ENV = process.env.NODE_ENV === "development";

async function inIt() {
  // load webflow recommendations to other modules can access data
  await fetchWebflowTips();

  if (IS_DEV_ENV) {
    fetchWebflowCssFile();
    // validateFormAndRender running in below function
    fetchHtmlPageForDev();
  } else {
    // PRODUCTION CODE
    validateFormAndRender();

    // disable sidebar forms
    Webflow.push(() => $("manual-review-form").submit(() => false));
    Webflow.push(() => $("screaming-frog-form").submit(() => false));
  }
}

inIt();

// instantiate func to fetch Webflow recommendations
// get data and pass to css file

/* const wfTips = webflowTips();
    await wfTips.fetchData();
    const wfTipsData = wfTips.getData(); */
