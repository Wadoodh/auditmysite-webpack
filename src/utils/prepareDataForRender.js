export default function prepareDataForRender(data) {
  return data.reduce((obj, item) => {
    obj.push({ [item[0]]: item[1] });
    return obj;
  }, []);
}
