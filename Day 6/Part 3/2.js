let n = 123;

let add = (num) => {
  let sum = 0;
  for (var i = 0; i < num.length; i+=1) {
    sum += parseInt(num[i]);
  }
  return sum;
};
console.log(add(n.toString()));
