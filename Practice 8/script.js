// let sum = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// for(let i = 0; i < n; i++){
//     sum += (i+1)
//     console.log((i+1),"+")
// }
// console.log("sum of first" + n + "natural number is" + sum)

let obj = {
    Shahnam:58,
    Hassan:55,
    Moon:59
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}
for(let b of "Shahnam"){
    console.log(b)
}