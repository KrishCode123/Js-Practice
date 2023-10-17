// Primitive data types
/*
1. String
2. Numbers
3. Boolean
4. NULL
5. Underfined
6. Symbol
7. BigInt
*/

const id = Symbol('123')
const Id = Symbol('123')

console.log(id);
console.log(Id);
console.log(id==Id);

const numberbig=123456789987654321n 


// Reference (Non Premitive)
/*
1. Array 
2. Objects 
3. Functions  
*/

const heros=["Shaktiman","Batman","Krish"]

let Myobj = {
    name: "Krishnan",
    age: 20
}

let myfunc= function print() {
    console.log("Hello World");
}

console.log(typeof(heros));


/**
 * Undefined ->undefined
 * Null->NULL
 * Boolean->boolean
 * String ->string 
 * Object->object 
 * 
 */


