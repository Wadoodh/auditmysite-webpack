import handleInputValidation from "./handleInputValidation";
import fetchPageSpeedData from "../../services/fetchPageSpeedData";
import fetchPsiData from "../../services/api/fetchPsiData";

export default function handleFormInput(event) {
  const formData = new FormData(event.target);
  const inputValue = formData.get("website-url");
  const isInputValid = handleInputValidation(inputValue);
  if (!isInputValid) return;
  // fetchPageSpeedData(inputValue);
  fetchPsiData(inputValue);
}
