// 1 mile animal = 50
// 10 miles animal = 50 * 10 = 500
// First ten miles animal = 500
// second 1 mile animal = 100
// second 10 miles animal = 100 * 10 =  1000
// first ten miles = 10 * 50 (per mile 50)
// second ten miles = 10 * 100 (per mile 100)
// upper 20 miles = per mile 300
let depth = 19;
let animal= 0;

if (depth <= 10) {
    animal = depth * 50;
}
 else if (depth <= 20) {
     let firstPart = 10 * 50;
     let remaining = depth - 10;
     let secondPart = remaining * 100;
     animal = firstPart + secondPart;
}
else {
    let firstPart = 10 * 50;
    let secondPart = 10 * 100;
    let remaining = depth - 20;
    let thirdPard = remaining * 300;
    animal = firstPart + secondPart + thirdPard;
}

console.log(animal);

function animalCalculator (depth) {
    let animal = 0;

    if (depth <= 10) {
        animal = depth * 50;
    }
    else if (depth <= 20) {
        let firstPart = 10 * 50;
        let remaining = depth - 10;
        let secondPart = remaining * 100;
        animal = firstPart + secondPart;
    }
    else {
        let firstPart = 10 * 50;
        let secondPart = 10 * 100;
        let remaining = depth - 20;
        let thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;

    }

    return animal;
}
let countingResult = animalCalculator(40);
console.log(countingResult);