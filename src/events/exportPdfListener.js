import fetchPdf from "../services/fetchPdf";

export default function exportPdfListener() {
  const exportButton = document.getElementById("export-report");

  exportButton.addEventListener("click", async function () {
    this.textContent = "Generating...";
    const pdf = await fetchPdf();
    downloadPDF(pdf.FileUrl);
    this.textContent = "Create new report";
  });
}

async function downloadPDF(pdfFile) {
  const filename = "temp name";

  try {
    const response = await fetch(pdfFile);
    const pdfBlob = await response.blob();

    const url = window.URL.createObjectURL(pdfBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);

    link.click();

    // clean up
    console.log("difference added...");

    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  } catch (error) {
    console.log("Error downloading PDF", error);
  }
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
