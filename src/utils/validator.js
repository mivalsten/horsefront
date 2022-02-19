export const patternValidator = (value, callback, pattern) => {
  if (pattern.test(value)) {
    callback();
  } else {
    callback(new Error("Value doesn't match pattern"));
  }
};
