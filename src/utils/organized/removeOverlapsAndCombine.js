export default function removeOverlapsAndCombine(desktop, mobile) {
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

  // console.log(arrayOfAudits);

  return arrayOfAudits;
}
