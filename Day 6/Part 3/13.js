var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a, c) {
  if (c % 2 != 0) {
    if (a % 2 != 0) {
      return a + c;
    } else {
      return 0 + c;
    }
  }
  return a;
});
console.log(s);
