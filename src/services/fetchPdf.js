import axios from "axios";
import getHtmlForPdf from "../render/getHtmlForPdf";

export default async function fetchPdf() {
  const html = getHtmlForPdf();

  console.log(html);

  // https://dev--make-pdf--webflow-success.autocode.dev/
  const { data } = await axios.post(
    "https://6zci2ewwouoxbt6mh2csp25zni0vymdp.lambda-url.us-east-2.on.aws/",
    { markup: html }
  );

  return data;
}

/* exportButton.src = data.FileUrl;
  exportButton.download = "Test file"; */
