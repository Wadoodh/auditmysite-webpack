export default function organizeInitialResult(data) {
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

  /* console.log("organizeInitialResult...");
  console.log(standardAudits); */

  return standardAudits;
}
