var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
(function () {
  let out = arr.slice(k, arr.length);
  var count = out.length;
  for (var i = 0; i < k; i++) {
    out[count] = arr[i];
    count += 1;
  }
  console.log(out);
})();
