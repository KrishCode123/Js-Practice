// Falsy 
// 0 , "", -0, NAN, BigInt, null, undefined, false

// Truthy
// "0", 'false', " ", [], {}, function(){}

const obj = {}
if ((Object.keys(obj)).length===0) {
    console.log("Empty object");
}

// Nullish Coalescing Operator (??) : null, undefined ke upar hai kahani
let val1;

// val1 = 5 ?? 10           Ans*5
// val1 = null ?? 40        Ans*40
// val1 = undefined ?? 42   Ans*42

// val1 = null ?? 10 ?? 20  Ans*10      Jo pehla dikhe lelo
console.log(val1);


// Ternery Operator 

const iceteaprice = 100

iceteaprice <= 50 ? console.log("Less than 50") : console.log("More"); 

