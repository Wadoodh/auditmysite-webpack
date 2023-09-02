import handleInputValidation from "./handleInputValidation";
import fetchPsiData from "../../services/fetchPsiData";

export default function handleFormInput(event) {
  const formData = new FormData(event.target);
  const inputValue = formData.get("website-url");
  const isInputValid = handleInputValidation(inputValue);
  if (!isInputValid) return false;
  // fetchPsiData(inputValue);
}
