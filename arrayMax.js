// Find the largest element of a array

let marks = [40, 60, 75, 55, 80, 90];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
    let element = marks[i];

    if (element > max) {
        max = element;
    }
}
console.log("The largest element of the array is :", max);