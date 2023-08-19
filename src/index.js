// libraries
import axios from "axios";
// import validateForm from "./client/index";
import isUrl from "is-url";

// custom functions
import fetchWebflowRecommendations from "./services/fetchWebflowRecommendations";
import addWebflowCssFile from "./utils/addWebflowCssFile";
import pickSpecificRecommendation from "./utils/pickSpecificRecommendation";
import prepareDataForRender from "./utils/prepareDataForRender";

const IS_DEV_ENV = process.env.NODE_ENV === "development";

async function inIt() {
  const recommendations = await fetchWebflowRecommendations();

  if (IS_DEV_ENV) {
    // add Webflow css file for styles in dev
    addWebflowCssFile(recommendations);
  }

  console.log(recommendations);

  const domain = "http://wadood";
  // console.log("domain test: " + isUrl(domain));

  /*  function prepareDataForRender(data) {
    return data.reduce((obj, item) => {
      obj.push({ [item[0]]: item[1] });
      return obj;
    }, []);
  } */

  async function getData() {
    if (IS_DEV_ENV) {
      const { data: desktop } = await axios.get("http://localhost:4000/data");
      const { data: mobile } = await axios.get("http://localhost:4001/data");

      const desktopResults = organizeInitialResult(desktop[0]);
      const mobileResults = organizeInitialResult(mobile[0]);

      const data = removeOverlapsAndCombine(desktopResults, mobileResults);

      const organizedData = data.reduce((obj, item) => {
        obj.push({ [item[0]]: item[1] });
        return obj;
      }, []);

      const result = prepareDataForRender(data);

      result.forEach((obj) => {
        for (let key in obj) {
          obj[key].forEach((prop) => {
            pickSpecificRecommendation(recommendations, prop.id);
          });
        }
      });
    } else {
      const { data } = await axios.get(
        "https://dev--psi-results--webflow-success.autocode.dev/",
        { params: { website: "www.wadood.dev" } }
      );

      const { desktop, mobile } = data;

      const desktopResults = organizeInitialResult(desktop);
      const mobileResults = organizeInitialResult(mobile);

      removeOverlapsAndCombine(desktopResults, mobileResults);
    }
  }

  getData();
}

inIt();

function organizeInitialResult(data) {
  const {
    lighthouseResult: {
      audits,
      categories: { performance },
    },
  } = data;

  let standardAudits = []; // get all required audits

  // iterate through all possible audits
  // get relevant ones for performance that contribute to weight/score
  // because there are audits that don't carry a weight, these don't have the 'relevantAudits' property
  // i.e., TBT, LCP, CLS, FCP all carry a weight and contribute to the overall score
  // screenshot: https://share.cleanshot.com/Wgr2HZ0b
  performance.auditRefs.forEach((audit) => {
    if (audit.hasOwnProperty("relevantAudits")) {
      // create new property to store relevant audits
      audit.matchedAudits = [];
      standardAudits.push(audit);
    }
  });

  // add category audit belongs to including the name and weight it contributes to the overall score
  // exclude audits with null score
  // push each relevant audit to standardAudits
  standardAudits.forEach((auditCategory) => {
    auditCategory.relevantAudits.forEach((audit) => {
      if (audits[audit].score === null) return;

      audits[audit].belongsToAuditCategory = {
        acronym: auditCategory.acronym,
        id: auditCategory.id,
        weight: auditCategory.weight,
      };

      auditCategory.matchedAudits.push(audits[audit]);
    });
  });

  // ascending: low to high
  // descending: high to low
  // sort main audit score areas by by heaviest areas i.e., TBT, LCP, CLS, and FCP
  standardAudits.sort((a, z) => z.weight - a.weight);

  // sort each relevant audit within each of the main areas (TBT, LCP, CLS, FCP) by score, lowest to highest
  standardAudits.forEach((audit) =>
    audit.matchedAudits.sort((a, z) => a.score - z.score)
  );

  return standardAudits;
}

function removeOverlapsAndCombine(desktop, mobile) {
  let finalAudits = [];
  const objectAudits = {};

  // add relevant desktop audits
  desktop.forEach((outerAudit) => {
    outerAudit.matchedAudits.forEach((innerAudit) => {
      if (innerAudit.score >= 0.9) return;
      // finalAudits.push(innerAudit);
      findAuditAndReplaceOrAdd(finalAudits, innerAudit);
    });
  });

  // add missing mobile audits
  // if audit exists and has a lower score, replace audit
  mobile.forEach((outerAudit) => {
    outerAudit.matchedAudits.forEach((innerAudit) => {
      if (innerAudit.score >= 0.9) return;

      findAuditAndReplaceOrAdd(finalAudits, innerAudit);
    });
  });

  function findAuditAndReplaceOrAdd(audits, currentAudit) {
    const existingAuditIndex = audits.findIndex(
      (audit) => audit.id === currentAudit.id
    );

    if (existingAuditIndex !== -1) {
      audits[existingAuditIndex] =
        currentAudit.score < audits[existingAuditIndex].score
          ? currentAudit
          : audits[existingAuditIndex];
    } else {
      audits.push(currentAudit);
    }

    return audits;
  }

  // convert array to object with weight as the keys
  finalAudits.forEach((audit) => {
    const weight = audit.belongsToAuditCategory.weight;
    if (!objectAudits.hasOwnProperty(weight)) {
      objectAudits[weight] = [];
      objectAudits[weight].push(audit);
    } else {
      objectAudits[weight].push(audit);
    }
  });

  // convert object back to array
  const arrayOfAudits = Object.entries(objectAudits);

  // sort array of arrays by highest weight
  arrayOfAudits.sort((a, b) => b[0] - a[0]);

  // sort audits within each weight by most important
  arrayOfAudits.forEach((outerAudit) => {
    outerAudit.forEach((innerAudit) => {
      if (typeof innerAudit === "object") {
        innerAudit.sort((a, b) => a.score - b.score);
      }
    });
  });

  console.log(arrayOfAudits);

  return arrayOfAudits;
}

/* 

{
    "id": "server-response-time",
    "title": "Initial server response time was short",
    "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).",
    "score": 1,
    "scoreDisplayMode": "binary",
    "displayValue": "Root document took 170 ms",
    "details": {
        "type": "opportunity",
        "items": [
            {
                "url": "https://webflow.com/",
                "responseTime": 165.968
            }
        ],
        "overallSavingsMs": 65.96799999999999,
        "headings": [
            {
                "valueType": "url",
                "key": "url",
                "label": "URL"
            },
            {
                "label": "Time Spent",
                "key": "responseTime",
                "valueType": "timespanMs"
            }
        ]
    },
    "numericValue": 165.968,
    "numericUnit": "millisecond",
    "belongsToAuditCategory": {
        "acronym": "LCP",
        "id": "largest-contentful-paint",
        "weight": 25
    }
}

*/

/* const existingAuditIndex = finalAudits.findIndex(
        (audit) => audit.id === innerAudit.id
      );

      if (existingAuditIndex !== -1) {
        // console.log(finalAudits);

        finalAudits[existingAuditIndex] =
          innerAudit.score < finalAudits[existingAuditIndex].score
            ? innerAudit
            : finalAudits[existingAuditIndex];
      } else {
        finalAudits.push(innerAudit);
      } */

/* const { data } = await axios.get(
      "https://dev--psi-results--webflow-success.autocode.dev/",
      { params: { website: "www.wadood.dev" } }
    ); */

// const { desktop, mobile } = data;

// organizeInitialResult(desktop)

// console.log(organizeInitialResult(desktop));

// https://dev--psi-results--webflow-success.autocode.dev/

/* const desktopResults = organizeInitialResult(desktopData[0]);
    const mobileResults = organizeInitialResult(mobileData[0]);

    removeOverlapsAndCombine(desktopResults, mobileResults); */

/* const desktopResults = organizeInitialResult(desktop);
    const mobileResults = organizeInitialResult(mobile);

    removeOverlapsAndCombine(desktopResults, mobileResults); */

/* fetch("https://playground-cf9983.webflow.io/")
      .then((res) => res.text())
      .then((html) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        const recommendation = recommendations.getElementById(id);
        if (!recommendation) return;
        window.document.body.append(recommendation);
      }); */
