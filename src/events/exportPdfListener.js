import fetchPdf from "../services/fetchPdf";

export default function exportPdfListener() {
  const exportButton = document.getElementById("export-report");

  exportButton.addEventListener("click", async function () {
    this.textContent = "Generating...";
    const pdf = await fetchPdf();
    console.log(pdf);
    this.href = pdf.FileUrl;
    this.target = "_blank";
    this.download = "Test file";
    this.textContent = "Click to download";

    // console.log(pdf.FileUrl);
  });

  return true;
}
