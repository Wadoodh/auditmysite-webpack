export default function getHtmlForPdf() {
  const results = document.getElementById("results-left");
  let cssFile = document.querySelector(`link[rel="stylesheet"]`);

  return `
    <html style="color: green;">
      <head>
      <link rel="stylesheet" href="${cssFile.sheet.href}" />
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
}
