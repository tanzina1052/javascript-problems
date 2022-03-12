// Random Number

let number = 5.456789;
let result1 = Math.floor(number);
console.log(result1);
let result2 = Math.ceil(number);
console.log(result2);
let result3 = Math.round(number);
console.log(result3);
let dice= Math.random();
console.log(dice);

let randomNum = Math.random() * 6;
console.log(randomNum);
let randomOutput = Math.round(randomNum);
console.log(randomOutput);

for(let i = 0; i < 6; i++) {
    let randomNum = Math.random() * 6;
    let randomOutput = Math.round(randomNum);
    console.log(randomOutput);
}

// 1-6
