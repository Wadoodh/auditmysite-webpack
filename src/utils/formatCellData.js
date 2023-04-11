function formatCellData(type, data) {
  let formatted = "";

  switch (type) {
    case "ms":
      // formatted = `${(data * 0.001).toFixed(3)} seconds`;
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
        ${data.text} — <a href="${data.url}">${data.url}</a>
        </div>`;
      break;
    case "url": // valueType
      if (!data) break;
      if (typeof data === "object") {
        formatted = `<a href="${data.url}">${data.url}</a>`;
      } else if (data.includes("https")) {
        formatted = `<a href="${data}">${data}</a>`;
      } else {
        formatted = data;
      }
      break;
    case "source-location": // valueType source-location
      formatted = `<a href="${data.location.url}">${data.location.url}</a>`;
      break;
    case "code": // valueType
      if (!data) break;
      if (data && data.includes("https")) {
        formatted = `<a href="${data}">${data}</a>`;
      } else {
        formatted = data;
      }
      break;
    case "bytes": // valueType
      if (!data) return "";
      formatted = `${(data * 0.000976562).toFixed(2)} KiB`;
      break;
    case "timespanMs": // valueType
      formatted = `${data} ms`;
      break;
    default:
      formatted = data;
  }

  return formatted;
}

export default formatCellData;
