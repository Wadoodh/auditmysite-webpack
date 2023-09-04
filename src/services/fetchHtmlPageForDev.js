import validateFormAndRender from "../client/validateFormAndRender";

export default async function fetchHtmlPageForDev() {
  const res = await fetch("https://ent-site-audit.webflow.io/");
  const html = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const pageWrap = doc.getElementById("page-wrap");
  document.body.append(pageWrap);
  validateFormAndRender();
}
