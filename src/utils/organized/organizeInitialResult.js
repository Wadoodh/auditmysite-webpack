export default function organizeInitialResult(data) {
  const {
    lighthouseResult: {
      audits,
      categories: { performance },
    },
  } = data;

  console.log(audits);

  let standardAudits = []; // get all required audits
  let auditsWithNoWeight = {
    id: "audits-with-no-weight",
    weight: 0,
    acronym: "audits-with-no-weight",
    relevantAudits: [], // all possible audits
    matchedAudits: [], // matched audits from possible ones for this specific audit
  };

  // score ranges
  // 0-49 - high priority
  // 50-89 - med priority
  // 90-100 - low priority, passing

  // iterate through all possible audits
  // get relevant ones for performance that contribute to weight/score
  // because there are audits that don't carry a weight, these don't have the 'relevantAudits' property
  // i.e., TBT, LCP, CLS, FCP all carry a weight and contribute to the overall score
  // screenshot: https://share.cleanshot.com/Wgr2HZ0b
  // speed index has a weight of 10 but no relevant audits, there are already areas recommended to improve this area

  performance.auditRefs.forEach((audit) => {
    if (audit.hasOwnProperty("relevantAudits") && audit.weight > 0) {
      // create new property to store relevant audits
      audit.matchedAudits = [];
      standardAudits.push(audit);
    } else if (audit.weight === 0) {
      auditsWithNoWeight.relevantAudits.push(audit);
    }
  });

  auditsWithNoWeight.relevantAudits.forEach((audit) => {
    if (audits[audit.id].score !== null && audits[audit.id].score < 0.9) {
      audits[audit.id].belongsToAuditCategory = {
        acronym: "audits-with-no-weight",
        id: "audits-with-no-weight",
        weight: 0,
      };

      auditsWithNoWeight.matchedAudits.push(audits[audit.id]);
      // console.log(audits[audit.id].id + " - " + audits[audit.id].score);
    }
  });

  // standardAudits.push(auditsWithNoWeight);

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

  // push audits with no weight
  // console.log(auditsWithNoWeight);
  standardAudits.push(auditsWithNoWeight);

  return standardAudits;
}

/* 



[
    "long-tasks",
    "third-party-summary",
    "third-party-facades",
    "bootup-time",
    "mainthread-work-breakdown",
    "dom-size",
    "duplicated-javascript",
    "legacy-javascript",
    "viewport"
]

[
    "server-response-time",
    "render-blocking-resources",
    "redirects",
    "critical-request-chains",
    "uses-text-compression",
    "uses-rel-preconnect",
    "uses-rel-preload",
    "font-display",
    "unminified-javascript",
    "unminified-css",
    "unused-css-rules",
    "largest-contentful-paint-element",
    "prioritize-lcp-image",
    "unused-javascript",
    "efficient-animated-content",
    "total-byte-weight",
    "lcp-lazy-loaded"
]

[
    "layout-shift-elements",
    "non-composited-animations",
    "unsized-images"
]

[
    "server-response-time",
    "render-blocking-resources",
    "redirects",
    "critical-request-chains",
    "uses-text-compression",
    "uses-rel-preconnect",
    "uses-rel-preload",
    "font-display",
    "unminified-javascript",
    "unminified-css",
    "unused-css-rules"
]

*/
