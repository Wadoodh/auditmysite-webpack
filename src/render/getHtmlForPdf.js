export default function getHtmlForPdf() {
  const results = document.getElementById("results-left");
  let cssFile = document.querySelector(`link[rel="stylesheet"]`);

  return `
    <html style="color: green;">
      <head>
      <link rel="stylesheet" href="${cssFile.sheet.href}" />
      <style>

      /*
      .title {
        font-size: 15px;
        color: black;
      }
      */

      .results-title {
        font-size: 18px;
        line-height: 1.4;
      }

      .results-section-title {
        margin-bottom: 10px;
      }

      .result-rte {
        font-size: 14px;
        color: rgb(105,105,105);
      }

      .result-block {
        margin-bottom: 0px;
      }

      .audit-wrapper {
        padding-bottom: 5px;
        margin-bottom: 20px;
      }

      .table-wrapper {
        margin-bottom: 40px;
      }

      .styled-table {
        /*border-collapse: collapse;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.01);
        border: 1px solid rgb(0 0 0 / 35%);  
        */
        font-size: 0.9rem;
        width: 100%;
              
      }

      .styled-table thead tr {
        background-color: #f5f5f5;
        color: #000;
        text-align: left;
        white-space: nowrap;
      }

      th {
        font-weight: 500;
      }

      .styled-table th,
      .styled-table td {
        padding: 10px 15px;
        word-break: break-all;
      }

      .styled-table tbody tr {
        /* border-bottom: 1px solid rgb(0 0 0 / 35%); */
      }

      .styled-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
      }

      .styled-table tbody tr:last-of-type {
        /* border-bottom: 1px solid rgb(0 0 0 / 35%) #ddd; */
        border-bottom: none;
      }

      .styled-table tbody tr.active-row {
        /* font-weight: bold; */
        color: #ddd;
      }
      </style>
      </head>
      <body>
      ${results.innerHTML}
      </body>
    </html>
    `;
}
