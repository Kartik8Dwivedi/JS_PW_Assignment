// let a = prompt("Enter URL for Validation");
let a = "https://www.linkedin.com/in/kartik-dwivedi-b51b46229/";
console.log("inputted URL is: "+a);
let pattern = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(in)\/[\w-]+\/?$/;

if(pattern.test(a))
    console.log("URL is correct")
else
    console.log("Incorrect URL")