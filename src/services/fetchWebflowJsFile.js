import { getWebflowTips } from "./fetchWebflowTips";

export default function fetchWebflowJsFile() {
  const doc = getWebflowTips();
  const jsFile = doc.querySelectorAll(`script[type="text/javascript"]`);

  jsFile.forEach((script) => {
    if (
      script.src.includes("assets.website-files.com") ||
      script.src.includes("jquery")
    ) {
      document.body.append(script);
    }
  });
}
