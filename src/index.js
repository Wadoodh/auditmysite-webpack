// COMMON **********
import validateFormAndRender from "./client/validateFormAndRender";

// DEV **********
import fetchWebflowCssFile from "./utils/fetchWebflowCssFile";
import fetchWebflowJsFile from "./services/fetchWebflowJsFile";
import { fetchWebflowTips } from "./services/fetchWebflowTips";
import fetchHtmlPageForDev from "./services/fetchHtmlPageForDev";

const IS_DEV_ENV = process.env.NODE_ENV === "development";

async function inIt() {
  // load webflow recommendations to other modules can access data
  await fetchWebflowTips();

  if (IS_DEV_ENV) {
    fetchWebflowCssFile();
    setTimeout(() => {
      fetchWebflowJsFile();
    }, 3000);
    // validateFormAndRender running in below function
    fetchHtmlPageForDev();
  } else {
    // PRODUCTION CODE
    validateFormAndRender();

    // disable sidebar forms
    Webflow.push(() => $("#project-settings-form").submit(() => false));
    Webflow.push(() => $("#screaming-frog-form").submit(() => false));
    Webflow.push(() => $("#designer-form").submit(() => false));
  }
}

inIt();
