// import validateForm from "./client/index";
const axios = require("axios");

function inIt() {
  if (PRODUCTION) {
    console.log("production");
  } else {
    console.log("development...");

    async function getData() {
      const { data } = await axios.get("http://localhost:8000/data");
      console.log(data[0]);
    }

    getData();
  }
  // website form to get website data
  // const psiData = validateForm();
}

inIt();
