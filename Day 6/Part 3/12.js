var array = [
  [
    ["firstName", "vasanth"],
    ["lastName", "Raje"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];
var final = [];
var new_object = {};
while (array.length != 0) {
  var outer_remove = array.shift();
  while (outer_remove.length != 0) {
    var inner_remove = outer_remove.shift();
    var key = inner_remove[0];
    var value = inner_remove[1];
    new_object[key] = value;
  }
  final.push(new_object);
}
console.log(final);
