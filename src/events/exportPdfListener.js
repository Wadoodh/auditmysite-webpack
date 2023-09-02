import fetchPdf from "../services/fetchPdf";

export default function exportPdfListener() {
  const exportButton = document.getElementById("export-report");

  exportButton.addEventListener("click", async function () {
    this.textContent = "Generating...";
    const pdf = await fetchPdf();
    downloadFile(pdf.FileUrl);
    this.textContent = "Create new report";
  });
}

function downloadFile(url) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  // name of file
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
