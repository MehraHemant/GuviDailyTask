var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

 
for (var i = numsArr.length-1; i >= 0; i-- ) {
 new_string += numsArr[i] + " " 
}
console.log(new_string.slice(0, new_string.length-1));