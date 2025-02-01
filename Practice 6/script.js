let a = prompt("Hello what is your Age?");
a = Number.parseInt(a);
console.log(typeof a);

if(a<0){
    alert("This is an invalid age");
}
else if(a<9){
    alert("You are a kid! you cannot even think about driving");
}
else if(a<18 && a>9){
    alert("You are a kid you can think of driving after 18");
}
 else{
    alert("this is and valid age"); 
}

console.log("You can",(a<18? "not drive":"drive"))