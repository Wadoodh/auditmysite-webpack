import { v4 as uuidv4 } from "uuid";
import createTable from "../render/table/createTable";

export default function pickSpecificRecommendation(doc, audit) {
  const recommendation = doc.getElementById(audit.id);

  if (!recommendation) {
    alert(`No audit found on the /Components page for ${audit.id}`);
  } else {
    recommendation.setAttribute("data-id", uuidv4());
    recommendation.setAttribute("contenteditable", false);
    document.getElementById("results").append(recommendation);
    createTable(audit);
  }
}

/* ************************************************** */
/* 
function createTable(currentAudit) {
  let resultsContainer = document.getElementById("results");

  const currentAuditDetails = currentAudit.details;

  if (!currentAuditDetails) return;

  let headerKeys = [];
  let tableHead = [];
  let subItemHeadings = [];
  let itemOrValueTypes = [];
  let subItemTypes = [];

  currentAuditDetails.headings.forEach((head) => {
    const headKey = head.key || head.url;
    const tableHeadTitle = head.text || head.label || " ";

    headerKeys.push(headKey);
    tableHead.push(tableHeadTitle);
    subItemHeadings.push(head.subItemsHeading);

    if (
      head.hasOwnProperty("subItemsHeading") &&
      head.subItemsHeading.hasOwnProperty("itemType")
    ) {
      subItemTypes.push(head.subItemsHeading.itemType);
    }

    itemOrValueTypes.push(head.itemType || head.valueType);
  });

  // table element
  let table = document.createElement("table");
  table.classList.add("styled-table");
  let tableTitles = Object.values(tableHead);

  // audit title and desc for table
  const title = createTableTitle(currentAudit.title);
  const description = createTableDescription(currentAudit.description);

  generateTable(
    table,
    currentAuditDetails.items,
    itemOrValueTypes,
    subItemHeadings,
    subItemTypes
  );

  // generate the table first
  createTableHeader(table, tableTitles);

  function generateTable(table, data, types, subItemHeadings, subItemTypes) {
    data.forEach((rowData) => {
      let newRow = table.insertRow();

      headerKeys.forEach((key, index) => {
        createAuditDetailsTableRow(newRow, rowData, key, index, types);
      });

      if (rowData.hasOwnProperty("subItems")) {
        rowData.subItems.items.forEach((subRowData) => {
          let newRow = table.insertRow();

          subItemHeadings.forEach((subHeading, index) => {
            createAuditDetailsTableRow(
              newRow,
              subRowData,
              subHeading?.key || "none",
              index,
              subItemTypes,
              true
            );
          });
        });
      }
    });
  }

  function createAuditDetailsTableRow(
    newRow,
    rowData,
    key,
    index,
    types,
    isSubItem = false
  ) {
    let cellToInsert = newRow.insertCell();
    if (isSubItem) cellToInsert.classList.add("sub-item");
    let cellInfo = formatTableCellData(
      types[index] || itemOrValueTypes[index],
      rowData[key]
    );

    if (
      (types[index] === "node" ||
        types[index] === "url" ||
        types[index] === "link" ||
        types[index] === "code" ||
        rowData.hasOwnProperty("location") ||
        rowData.hasOwnProperty("url")) &&
      cellInfo
    ) {
      cellToInsert.innerHTML = cellInfo;
    } else {
      let dataToInsert = document.createTextNode(cellInfo || " ");
      cellToInsert.appendChild(dataToInsert);
    }
  }

  // table wrapper
  const tableWrapper = document.createElement("div");
  tableWrapper.classList.add("table-wrapper");

  /* tableWrapper.append(title);
    tableWrapper.append(description); 
  tableWrapper.append(table);
  resultsContainer.append(tableWrapper);
}
 */

/* function createTableTitle(text) {
  const title = document.createElement("h2");
  const titleText = document.createTextNode(text);
  title.appendChild(titleText);
  return title;
} */

/* function createTableDescription(text) {
  const description = document.createElement("p");
  const descriptionText = document.createTextNode(text);
  description.appendChild(descriptionText);
  return description;
} */

/* function formatTableCellData(type, data) {
  let formatted = "";

  switch (type) {
    case "ms":
      formatted = `${data.toFixed(0)} ms`;
      break;
    case "node":
      if (!data) break;
      formatted = `
      <div>
        <span>
          ${data?.nodeLabel}
        </span>
      </div>`;
      break;
    case "link":
      formatted = `
      <div>
      ${data.text} — <a href="${data.url}" target="_blank">${data.url}</a>
      </div>`;
      break;
    case "url":
      if (!data) break;
      if (typeof data === "object") {
        formatted = `<a href="${data.url}" target="_blank">${data.url}</a>`;
      } else if (data.includes("https")) {
        formatted = `<a href="${data}" target="_blank">${data}</a>`;
      } else {
        formatted = data;
      }
      break;
    case "source-location":
      formatted = `<a href="${data.location.url}" target="_blank">${data.location.url}</a>`;
      break;
    case "code":
      if (!data) break;
      if (data && data.includes("https")) {
        formatted = `<a href="${data}" target="_blank">${data}</a>`;
      } else {
        formatted = data;
      }
      break;
    case "bytes":
      if (!data) return "";
      formatted = `${(data * 0.000976562).toFixed(2)} KiB`;
      break;
    case "timespanMs":
      formatted = `${data} ms`;
      break;
    default:
      formatted = data;
  }

  return formatted;
} */

/* function createTableHeader(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();

  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
 */
