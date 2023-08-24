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

    /* console.log("desktop...");
    console.log(desktop[0]); */

    const data = removeOverlapsAndCombine(desktopResults, mobileResults);

    const result = prepareDataForRender(data);

    /* console.log("result...");
    console.log(result); */

    result.forEach((obj) => {
      for (let key in obj) {
        obj[key].forEach((prop) => {
          pickSpecificRecommendation(recommendations, prop);
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
          pickSpecificRecommendation(recommendations, prop);
        });
      }
    });
  }

  hideLoader();
  scrollToBottomOfPage();

  getResultsPage();
}

function getResultsPage() {
  const results = document.getElementById("results");

  const one = `
  <html style="color: green;">
    <head>
    <link rel="stylesheet" href="https://assets.website-files.com/64e2d5a8afe3bbe1854303fe/css/ent-site-audit.webflow.76a140f64.css" />
    <style>
    .table-wrapper {
      margin-bottom: 40px;
    }

    .styled-table {
      border-collapse: collapse;
      font-size: 0.9rem;
      font-family: sans-serif;
      width: 100%;
      border: 1px solid #ddd;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.01);
    }

    .styled-table thead tr {
      background-color: #ddd;
      color: #000;
      text-align: left;
      white-space: nowrap;
    }

    .styled-table th,
    .styled-table td {
      padding: 12px 15px;
      word-break: break-all;
    }

    .styled-table tbody tr {
      border-bottom: 1px solid #ddd;
    }

    .styled-table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }

    .styled-table tbody tr:last-of-type {
      border-bottom: 1px solid #ddd;
    }

    .styled-table tbody tr.active-row {
      font-weight: bold;
      color: #ddd;
    }

    .sub-item:first-child::before {
      content: "↳";
      margin-right: 8px;
      color: rgba(128, 128, 128, 0.8);
    }

    /* results block */

    .result-block:focus-visible {
      outline: none;
    }

    .result-block[contenteditable="true"] {
      background-color: #ddd;
    }
    </style>
    </head>
    <body>
    ${results.innerHTML}
    </body>
  </html>
  `;

  pdfTest(one);
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
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
}

async function pdfTest(htmlString) {
  const { data } = await axios.post(
    "https://dev--make-pdf--webflow-success.autocode.dev/",
    { markup: htmlString }
  );

  console.log(data);
}

// pdfTest();
