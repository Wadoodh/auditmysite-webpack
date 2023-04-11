function sortAscend(data, key) {
  return data.sort((a, z) => a[key] - z[key]);
}

export default sortAscend;
