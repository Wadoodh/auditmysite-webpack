// COMMON **********
import validateFormAndRender from "./client";

// DEV **********
import fetchWebflowCssFile from "./utils/fetchWebflowCssFile";
import fetchWebflowTips from "./services/fetchWebflowTips";

const IS_DEV_ENV = process.env.NODE_ENV === "development";

console.log("Environment is " + (IS_DEV_ENV ? "DEV" : "PROD"));

async function inIt() {
  if (IS_DEV_ENV) {
    const wfTips = await fetchWebflowTips();
    // add Webflow css file for styles in dev
    fetchWebflowCssFile(wfTips);

    // get Webflow html page and insert into dev env
    async function fetchMainPage() {
      const res = await fetch("https://ent-site-audit.webflow.io/");
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const pageWrap = doc.getElementById("page-wrap");
      document.body.append(pageWrap);

      /* validation form and rendering process */
      validateFormAndRender();
    }

    fetchMainPage();
  } else {
    // PRODUCTION CODE
    validateFormAndRender();
  }
}

inIt();
