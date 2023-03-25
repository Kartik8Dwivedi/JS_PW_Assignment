let obj ={
    pen : 4,
    pencil : 3,
    eraser : 1,
    sharpner : 1,
    scale : 2
}
function usdToInr(object){
    return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key, value * 80]));
}
console.log("Initial Object: ",obj);
console.log(`Final Object:   `,usdToInr(obj))
