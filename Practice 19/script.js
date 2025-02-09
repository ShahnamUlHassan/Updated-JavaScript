// let arr = [45,32,67];
// console.log(arr);

// let a = arr.map((value, )=>{
//     console.log(value)
//     return value + 1
// })
// console.log(a);


// let a = arr.map((value, index )=>{
//     console.log(value , index)
//     return value + 1
// })
// console.log(a);


// let a = arr.map((value, index, array )=>{
//     console.log(value , index, array)
//     return value + 1
// })
// console.log(a);


// let a = arr.map((value, index, array )=>{
//     console.log(value , index, array)
//     return value + index
// })
// console.log(a);

// let arr = [34,23,54,0,6,1];
// let a2 = arr.filter((a)=>{
//     return a<10
// })
// console.log(a2);

let arr3 = [1,2,3,4,5,6]
const reduce_function = (h1,h2)=>{
    return h1 + h2
}
let newarr3 = arr3.reduce(reduce_function)
console.log(newarr3);