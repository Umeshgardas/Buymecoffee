export const isValidNumber = (value) => {
  const isValidNumber = /^\d*\.?\d+$/.test(value);
    return isValidNumber;
};
