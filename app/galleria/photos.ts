export const photos = new Array(122)
  .fill(1)
  .map((value, index) => `photo${value + index}.jpg`)
  .sort((a, b) => b.localeCompare(a));
