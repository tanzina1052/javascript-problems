// Reverse String 
let statement = "Hello Bangladesh!";
let reverse = "";

for (let i = 0; i < statement.length; i++) {
    let char = statement[i];
    console.log(char);
    reverse =  char + reverse ;
    console.log(reverse);
}
console.log(reverse);


// Reverse String with function for reuse
function reverseString(str) {
    let reverse = "";
    for(let i = 0; i < str.length; i ++) {
        let char = str[i];
        reverse =  char + reverse ;
    }
    return reverse;
}
let statement2 = "Hello universe!";
let resultReverseStr = reverseString(statement2);
console.log(resultReverseStr);


