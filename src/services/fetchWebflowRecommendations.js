export default async function fetchWebflowRecommendations() {
  const res = await fetch("https://playground-cf9983.webflow.io/");
  const html = await res.text();
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
}
