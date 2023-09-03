export default function useLocalStorage(storageKey, itemId) {
  const allData = localStorage.getItem(storageKey);
  const parsedData = JSON.parse(allData);
  const currentItemIndex = parsedData.findIndex((item) => item.id === itemId);
  // parsedData[currentItemIndex]
  localStorage.setItem(storageKey, JSON.stringify(data));
}
