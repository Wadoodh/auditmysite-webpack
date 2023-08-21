export default function pickSpecificRecommendation(doc, id) {
  const recommendation = doc.getElementById(id);
  if (!recommendation) return;
  document.getElementById("results").append(recommendation);
  // window.document.body.append(recommendation);
}
