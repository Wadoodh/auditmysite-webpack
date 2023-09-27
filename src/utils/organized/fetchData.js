import axios from "axios";

export default async function fetchData(url, payload) {
  try {
    const data = await axios.get(url, payload && { params: payload });
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
}

/* async function getData(url) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
} */

async function invokeData() {
  const [data, error] = await getData("dfadf");
  const [data1, error1] = await getData("dfadf");

  if (error) {
    // show some error
  }
}
