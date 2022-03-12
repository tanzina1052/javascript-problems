// Total or sum of the array elements

let numbers = [23, 11, 20, 40, 30, 25, 36];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    sum = sum + element
}

console.log("Totall of elements is:", sum);

// Inside a function to reuse 

function getArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;

}

let total = getArraySum(numbers);
console.log(total);

const anotherArray = [40, 20, 30, 55, 45, 99];
let anotherTotal = getArraySum(anotherArray);
console.log(anotherTotal);