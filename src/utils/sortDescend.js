function sortDescend(data, key) {
  return data.sort((a, z) => z[key] - a[key]);
}

export default sortDescend;
