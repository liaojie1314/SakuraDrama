function getPageCount(len, perPage) {
  let count = parseInt(len / perPage);
  if (len % 36 != 0) {
    count++;
  }
  return count;
}

export default { getPageCount };
