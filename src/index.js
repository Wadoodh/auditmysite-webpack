import axios from "axios";
import validateForm from "./client/index";
const isValidDomain = require("is-valid-domain");

function inIt() {
  const domain = "www.test.com";

  // console.log("domain test: " + isValidDomain(domain));

  async function getData() {
    const { data: desktopData } = await axios.get("http://localhost:4000/data");
    const { data: mobileData } = await axios.get("http://localhost:4001/data");

    const desktopResults = organizeInitialResult(desktopData[0]);
    const mobileResults = organizeInitialResult(mobileData[0]);

    removeOverlapsAndCombine(desktopResults, mobileResults);

    /* const {
      lighthouseResult: {
        audits,
        categories: { performance },
      },
    } = data[0];

    let standardAudits = []; // get all required audits
    let accumulatedAudits = []; // store audits that have been added to prevent duplicates

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

    // performance audits
    // between desktop and mobile, PSI recommendations have a lot of overlap
    // this code accounts for the overlap and ensures the audit with the higher score is reported
    // between the two breakpoints
    standardAudits.forEach((auditCategory) => {
      auditCategory.matchedAudits.forEach((audit) => {
        console.log(audit);

        if (accumulatedAudits.indexOf(audit.id) === -1) {
          accumulatedAudits.push(audit.id);

          // high 0-49
          // med 50-89
          // low 90-100

          if (audit.score >= 0 && audit.score <= 0.49) {
            // highPriorityAudits.push(audit);
            // createAudit(audit, audit.details);
          } else if (audit.score >= 0.5 && audit.score <= 0.89) {
            // medPriorityAudits.push(audit);
            // createAudit(audit, audit.details);
          } else if (audit.score >= 0.9 && audit.score <= 1) {
            // lowPriorityAudits.push(audit);
            // createAudit(audit, audit.details);
          }
        }
      });
    });

    */

    // end of getData
  }

  getData();
}

function organizeInitialResult(data) {
  const {
    lighthouseResult: {
      audits,
      categories: { performance },
    },
  } = data;

  let standardAudits = []; // get all required audits
  let accumulatedAudits = []; // store audits that have been added to prevent duplicates

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
  const finalAudits = [];
  const id = "third-party-facades";

  desktop.forEach((outerAudit) => {
    outerAudit.matchedAudits.forEach((innerAudit) => {
      if (innerAudit.score >= 0.9) return;
      finalAudits.push(innerAudit);
    });
  });

  mobile.forEach((outerAudit) => {
    outerAudit.matchedAudits.forEach((innerAudit) => {
      // start...
      if (innerAudit.score >= 0.9) return;

      const existingAuditIndex = finalAudits.findIndex(
        (audit) => audit.id === innerAudit.id
      );

      if (existingAuditIndex !== -1) {
        finalAudits[existingAuditIndex] =
          innerAudit.score < finalAudits[existingAuditIndex].score
            ? innerAudit
            : finalAudits[existingAuditIndex];
      } else {
        finalAudits.push(innerAudit);
      }
    });
  });

  // ascending: low to high
  // descending: high to low
  // sort main audit score areas by by heaviest areas i.e., TBT, LCP, CLS, and FCP
  finalAudits.sort(
    (a, z) => z.belongsToAuditCategory.weight - a.belongsToAuditCategory.weight
  );

  // sort each relevant audit within each of the main areas (TBT, LCP, CLS, FCP) by score, lowest to highest
  /* finalAudits.forEach((audit) => {
    console.log(audit);
    // audit.matchedAudits.sort((a, z) => a.score - z.score)
  }); */

  finalAudits.sort((a, b) => {
    b.belongsToAuditCategory.weight - a.belongsToAuditCategory.weight ||
      a.score - b.score;
  });

  console.log(finalAudits);
}

inIt();

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
