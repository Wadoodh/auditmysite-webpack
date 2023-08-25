export default async function fetchWebflowTips() {
  const res = await fetch("https://ent-site-audit.webflow.io/components");
  const html = await res.text();
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
}
