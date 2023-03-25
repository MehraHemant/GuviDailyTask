// print odd number in an array. (using arrow function)

let oddNumbers = (array) => {
    let oddNumbers = [];
    for (let value of array) {
        ((value%2)!=1?null:oddNumbers.push(value))
    }
    return oddNumbers;
}

let numbers = [1, 5, 7, 8, 10, 2, 6, 11];
console.log(oddNumbers(numbers));