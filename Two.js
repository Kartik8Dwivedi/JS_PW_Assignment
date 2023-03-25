let delayTime = 3;
const loop = setInterval(() =>{
    if(delayTime>0){
    console.clear();
    console.log("The Random Number will be generated in "+delayTime+" seconds......");
    }
    delayTime--;
    if(delayTime<0){
        console.clear();
        clearInterval(loop);
        console.log("The Random Number is: " + Math.round(Math.random() * 100));
    }
}, 1000);