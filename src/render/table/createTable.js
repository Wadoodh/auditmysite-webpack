import { showAuditTableConfig } from "../../utils/organized/showAuditTableConfig";
import createTableHeader from "./createTableHeader";
import formatTableCellData from "./formatTableCellData";

export default function createTable(currentAudit) {
  let resultsContainer = document.getElementById("results");

  const currentAuditDetails = currentAudit.details;

  if (!currentAuditDetails) return;

  if (currentAuditDetails.type === "debugdata") return;

  let headerKeys = [];
  let tableHead = [];
  let subItemHeadings = [];
  let itemOrValueTypes = [];
  let subItemTypes = [];

  if (currentAuditDetails.hasOwnProperty("headings")) {
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
  } else {
    // investigate further
    // console.log(currentAuditDetails);
  }

  // table element
  let table = document.createElement("table");
  table.classList.add("styled-table");
  let tableTitles = Object.values(tableHead);

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
        createTableRow(newRow, rowData, key, index, types);
      });

      if (rowData.hasOwnProperty("subItems")) {
        if (!showAuditTableConfig[currentAudit.id].showSubItems) return;

        rowData.subItems.items.forEach((subRowData) => {
          let newRow = table.insertRow();

          subItemHeadings.forEach((subHeading, index) => {
            createTableRow(
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

  function createTableRow(
    newRow,
    rowData,
    key,
    index,
    types,
    isSubItem = false
  ) {
    // don't create row if blocking time is 0 ms to only show impactful audits
    // specifically for the audit "third-party-summary"
    if (rowData?.blockingTime === 0) return;

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

  return table;

  tableWrapper.append(table);
  resultsContainer.append(tableWrapper);
}
