alert("Enter the value of a");
let a = prompt("Enter value here");
a = Number.parseFloat(a);
alert("You entered the type of" + (typeof a))
let write = confirm("Do you want to write it on the page?");
if(write){
    document.write(a)
}else{
    document.write("Please allow me to write")
}
