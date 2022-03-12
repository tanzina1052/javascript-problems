// Counting word with more than one space

let speech = "I  am a  good person. I don't snore at night.";
let length = speech.length;
console.log(length);
let countWord = 0;

for (let i = 0; i < length; i ++) {
    let char = speech[i];
    console.log(char);

    if (char == " " && speech[i-1] != " ") {
        countWord++;
    }
}

countWord++;
console.log(countWord);
