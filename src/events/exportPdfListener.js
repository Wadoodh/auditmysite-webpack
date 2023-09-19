import fetchPdf from "../services/fetchPdf";
import showToast from "../utils/organized/showToast";

export default function exportPdfListener() {
  const exportButton = document.getElementById("export-report");

  exportButton.addEventListener("click", async function () {
    if (this.classList.contains("cc-disabled")) return;
    this.textContent = "Generating...";
    this.classList.add("cc-disabled");
    const pdf = await fetchPdf();
    downloadPDF(pdf.FileUrl);
    this.textContent = "Create new report";
    this.classList.remove("cc-disabled");
    showToast("PDF exported");
  });
}

async function downloadPDF(pdfFile) {
  let filename = document.getElementById("website-url").value;
  filename = filename.split(".").join("-");

  try {
    const response = await fetch(pdfFile);
    const pdfBlob = await response.blob();

    const url = window.URL.createObjectURL(pdfBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `webflow-site-audit-for-${filename}`;
    link.style.display = "none";
    document.body.appendChild(link);

    link.click();

    // clean up
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
