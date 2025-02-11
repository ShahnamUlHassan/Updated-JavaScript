// let arr = [1,2,3,4,5,6,7,8,9];
// let a = prompt("Enter a number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// let arr = [1,2,3,4,5,6,7,8,9];
// let a ;
// do{
//     a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
// }while (a != 0);
// console.log(arr);

// let arr = [1 , 5 , 15 , 20 , 70 ];
// let n = arr.filter((x)=>{
//     return x%5 == 0
// })
// console.log(n);

// let arr = [1 , 5 , 7 , 10 , 13 , 15];
// let n = arr.map((x)=>{
//     return x*x
// })
// console.log(n);

let arr = [1,2,3,4,5];
let n = arr.reduce((x1, x2)=>{
    return x1 * x2
})
console.log(n);

