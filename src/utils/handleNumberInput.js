export const removeNoneNumricValues = (value) => {
  return value.replace(/[^0-9.]/g, "");
};
