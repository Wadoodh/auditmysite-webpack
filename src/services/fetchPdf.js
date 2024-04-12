import getHtmlForPdf from "../render/getHtmlForPdf";
import showToast from "../utils/organized/showToast";

export default async function fetchPdf() {
  const html = getHtmlForPdf();

  try {
    const response = await fetch(
      "https://6zci2ewwouoxbt6mh2csp25zni0vymdp.lambda-url.us-east-2.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({ markup: html }),
      }
    );

    const reportDetails = await response.json();
    return reportDetails;
  } catch (error) {
    showToast("Error fetching pdf", "error");
  }
}
