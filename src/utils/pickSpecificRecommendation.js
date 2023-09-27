import createTable from "../render/table/createTable";
// import { v4 as uuidv4 } from "uuid";
import { getWebflowTips } from "../services/fetchWebflowTips";
import { showAuditTableConfig } from "./organized/showAuditTableConfig";

export default function pickSpecificRecommendation(audit) {
  const tips = getWebflowTips();
  const recommendation = tips.getElementById(audit.id);
  const auditWrapper = document.createElement("div");
  auditWrapper.classList.add("audit-wrapper");

  if (!recommendation) {
    const diagnosticsSidebarLinks = document.getElementById("diagnostics");
    const diagnosticsContainer = document.getElementById(
      "diagnostics-container"
    );

    if (diagnosticsSidebarLinks.classList.contains("u-d-none")) {
      diagnosticsSidebarLinks.classList.remove("u-d-none");
    }

    if (diagnosticsContainer.classList.contains("u-d-none")) {
      diagnosticsContainer.classList.remove("u-d-none");
    }

    const heading = document.createElement("h3");
    const paragraph = document.createElement("p");
    heading.textContent = audit.title;
    paragraph.textContent = audit.description;
    auditWrapper.setAttribute("id", audit.id);
    auditWrapper.append(heading);
    auditWrapper.append(paragraph);
    if (audit["details"]) auditWrapper.append(createTable(audit));
    document.getElementById("diagnostics-container").append(auditWrapper);
    addSidebarLinks(audit, "diagnostics");
  } else {
    if (audit.id === "dom-size") {
      // number of elements on the page
      recommendation.querySelector("#dom-size-number").textContent =
        audit.numericValue;
    }

    auditWrapper.append(recommendation);
    if (showAuditTableConfig[audit.id].showItems) {
      auditWrapper.append(createTable(audit));
    }
    document.getElementById("results").append(auditWrapper);
    addSidebarLinks(audit, "toc");
  }
}

function addSidebarLinks(audit, section) {
  const sidebar = document.getElementById(section);
  const textLink = document.createElement("a");
  textLink.href = `#${audit.id}`;
  textLink.classList.add("u-text-link");
  textLink.textContent = audit.title;
  sidebar.append(textLink);
}
