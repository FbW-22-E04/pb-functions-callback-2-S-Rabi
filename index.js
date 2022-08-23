function sqaure(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}
let result = sqaure([1, 2, 3, 4, 5, 6], function (num) {
  return num ** 2;
});

console.log(result);
