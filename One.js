// let a = prompt("Enter the String to be reversed") // for taking input from browser
let a = "PW SKILLS"; 
console.log("Entered String is: "+a)
let arr = a.split('');
let reversed = [];
setTimeout(() =>{
    arr.forEach((element)=> {
        reversed.unshift(element)
    });
    let convertedStr = reversed.join('')
    console.log("The reversed String is: "+convertedStr);
},2000);