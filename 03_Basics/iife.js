// Imediately Invoked Functions Execution [IIFE]

// function one () {
//     console.log("Krishnan");
// }

// one()

(function one () {
    // Named IIFE hai 
    console.log("Krishnan");
})();   //IIFE me ; necceeary hai 

// Global scope ke pollution se kayi baar problem hoti hai function ke execution me 
// Issiliye IIFE Ka use hota hai global scope ke variables or declaration hatane ke lie

((name) => {
    // Unamed IFFE
    console.log(`Hii, Welcome to the company ${name}`);
})("Krishnan")
