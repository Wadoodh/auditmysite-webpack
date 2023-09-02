import axios from "axios";
import getHtmlForPdf from "../render/getHtmlForPdf";

export default async function fetchPdf() {
  const html = getHtmlForPdf();

  const { data } = await axios.post(
    "https://dev--make-pdf--webflow-success.autocode.dev/",
    { markup: html }
  );

  return data;
}

/* exportButton.src = data.FileUrl;
  exportButton.download = "Test file"; */
