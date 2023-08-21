export default async function fetchWebflowRecommendations() {
  const res = await fetch("https://ent-site-audit.webflow.io/components");
  const html = await res.text();
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
}
