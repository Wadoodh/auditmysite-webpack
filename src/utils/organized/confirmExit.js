export default function confirmExit() {
  window.onbeforeunload = () => "Confirm refresh";
}
