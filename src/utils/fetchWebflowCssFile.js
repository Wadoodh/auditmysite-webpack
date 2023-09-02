import { getWebflowTips } from "../services/fetchWebflowTips";

export default function fetchWebflowCssFile() {
  const doc = getWebflowTips();
  const cssFile = doc.querySelector(`link[rel="stylesheet"]`);
  document.head.append(cssFile);
}
