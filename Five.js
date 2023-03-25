// let a = prompt("Enter URL for Validation");  //for taking input from browser
let a = "https://chat.openai.com/";
console.log("inputted URL is: "+a);
let pattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
if(pattern.test(a))
    console.log("URL is correct")
else
    console.log("Incorrect URL")