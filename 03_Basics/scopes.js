var c =500
let a = 500

if(true){
    let a = 300
    const b = 400           // Local space .. iske bahar sab global space 
    var c = 30  
    // console.log(`Inner block scope value is:  ${a}`);    
}

// console.log(a);  Throws error if a is not declared in the global scope
// console.log(b);  Throws error if a is not declared in the global scope
// console.log(c);

// console.log(`The glocal Scope is:  ${a}`);



//  **  **  ** New function ** ** ** ** 

console.log(addone(4))
function addone(num){
    return num+1
}

// console.log(addtwo(5))   Throws error because used before declaration
const addtwo = function (num){
    return num+1
}
console.log(addtwo(5))


