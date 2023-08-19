export default function pickSpecificRecommendation(doc, id) {
  const recommendation = doc.getElementById(id);
  if (!recommendation) return;
  window.document.body.append(recommendation);
}
