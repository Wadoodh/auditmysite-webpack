export default function fetchWebflowCssFile(doc) {
  const cssFile = doc.querySelector(`link[rel="stylesheet"]`);
  document.head.append(cssFile);
}
