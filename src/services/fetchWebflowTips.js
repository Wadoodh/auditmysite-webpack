let data = null;

export async function fetchWebflowTips() {
  const res = await fetch("https://ent-site-audit.webflow.io/components");
  const html = await res.text();
  const parser = new DOMParser();
  data = parser.parseFromString(html, "text/html");
}

export const getWebflowTips = () => data;

/* const fetchData = async () => {
    const res = await fetch("https://ent-site-audit.webflow.io/components");
    const html = await res.text();
    const parser = new DOMParser();
    data = parser.parseFromString(html, "text/html");
  }; */

// fetchData();

// const getData = () => data;

// return { fetchData, getData };
