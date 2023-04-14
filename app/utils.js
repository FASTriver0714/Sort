export const wait = () => {
  return new Promise(function (resolve, _) {
    setTimeout(resolve, 500);
  });
};
