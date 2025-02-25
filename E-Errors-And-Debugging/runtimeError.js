const runtimeError = () => {
  console.log(x);
  let num = 12;
  num();
};

exports.runtimeError = runtimeError;
