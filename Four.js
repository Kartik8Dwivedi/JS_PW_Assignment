let arr = [
    {title: "Rich Dad Poor Dad", author : "Robert Kiyosaki", year : 1997},
    {title: "nineteen", author : "austen", year : 1913},
    {title: "thisYear", author : "Steve", year : 1917},
    {title: "wwe", author : "brock Lesnar", year : 2011},
    {title: "ecw", author : "tribal", year : 2011},
    {title: "The Chief", author : "tribal", year : 2015}
]

let filteredEle = 
        arr.filter((x)=> x.year>=2010).map((x)=>{
        return {title : x.title,
        year : x.year,
        author : (x.author.charAt(0).toUpperCase() + x.author.substring(1))
        };
    });
console.log("The Filtered Books are: ")
console.log(filteredEle)