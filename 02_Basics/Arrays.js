// Arrays 

const myarr0 = [1,2,3,4,5]
// console.log(myarr0[2]);

// Array methods 

myarr0.push(6)
myarr0.push(7)
myarr0.pop()

myarr0.unshift(9)      // Strating me 9 add ho jayega 
// console.log(myarr0);

myarr0.shift(9)
// console.log(myarr0);    // Starting se 9 hat jayega

// console.log(myarr0.includes(5));

const newarr = myarr0.join()    //Convert to String 
// console.log(newarr);

// Slice and Splice 

console.log("A ",myarr0);
const mynewarr = myarr0.slice(1,3)
console.log(mynewarr);

console.log("B ",myarr0)
const mynewarr2 = myarr0.splice(1,3)    //Manupulates the orignal Array 

console.log("C ", myarr0);  
console.log(mynewarr2);