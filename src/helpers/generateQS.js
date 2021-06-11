export default (params) => {
  const res = {};

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      if (params[key]) {
        res[key] = params[key];
      }
    }
  }

  return res;
};
