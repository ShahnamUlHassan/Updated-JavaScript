let num = [5,3,7,9,1];
for(let i=0; i<num.length;i++){
    console.log(num[i])
}

num.forEach((element)=>{
    console.log(element * element)
});

let name = "Shahnam";
let arr = Array.from(name);
console.log(arr);

for (let i of num){
    console.log(i)
};

for (let i in num){
    console.log(i)
}