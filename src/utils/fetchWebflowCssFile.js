import { getWebflowTips } from "../services/fetchWebflowTips";

export default function fetchWebflowCssFile() {
  const doc = getWebflowTips();
  const cssFile = doc.querySelector(`link[rel="stylesheet"]`).cloneNode();
  document.head.append(cssFile);
}
