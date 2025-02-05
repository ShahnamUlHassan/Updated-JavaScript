let str = "Shahnam\"";
console.log(str.length);

const sentence = "Hello World!";
const word = "Hi!";
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not "}in the sentence`);
console.log(word.toLowerCase());
console.log(word.toUpperCase());

let str2 = "Please give me Rs 1000";
let amount = str2.slice("Please give me Rs ".length);
console.log(amount);