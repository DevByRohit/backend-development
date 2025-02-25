const logicalError = () => {
  let x = 5;
  if ((x = 10)) {
    console.log("x is equal to 10");
  }

  let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
  }

  let num = "10";
  let sum = num + 10;
  console.log(sum);
};

module.exports = logicalError;
