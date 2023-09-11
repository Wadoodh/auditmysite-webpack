export default function formatTableCellData(type, data) {
  let formatted = "";

  switch (type) {
    case "ms":
      formatted = `${data.toFixed(0)} ms`;
      break;
    case "node":
      if (!data) break;
      formatted = `
        <div>
          <span>
            ${data?.nodeLabel}
          </span>
        </div>`;
      break;
    case "link":
      formatted = `
        <div>
        ${data.text} — <a href="${data.url}" target="_blank">${data.url}</a>
        </div>`;
      break;
    case "url":
      if (!data) break;
      if (typeof data === "object") {
        formatted = `<a href="${data.url}" target="_blank">${data.url}</a>`;
      } else if (data.includes("https")) {
        formatted = `<a href="${data}" target="_blank">${data}</a>`;
      } else {
        formatted = data;
      }
      break;
    case "source-location":
      formatted = `<a href="${
        data?.location?.url || data.url
      }" target="_blank">${data?.location?.url || data.url}</a>`;
      break;
    case "code":
      if (!data) break;
      if (data && data.includes("https")) {
        formatted = `<a href="${data}" target="_blank">${data}</a>`;
      } else {
        formatted = data;
      }
      break;
    case "bytes":
      if (!data) return "";
      formatted = `${(data * 0.000976562).toFixed(2)} KiB`;
      break;
    case "timespanMs":
      formatted = `${data} ms`;
      break;
    default:
      formatted = data;
  }

  return formatted;
}
