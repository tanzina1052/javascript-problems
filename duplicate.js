// Remove duplicate item from an array

const names = [1, 4, 3, 1, 4, 5, 3, 9, 12, 5];
let uniqueNames = [];

for(let i = 0; i < names.length; i ++) {
    let element = names[i];
    let index = uniqueNames.indexOf(element);

    if(index == -1) {
        uniqueNames.push(element);
    }
}
console.log(uniqueNames);

