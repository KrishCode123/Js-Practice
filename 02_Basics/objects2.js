const instauser = new Object()  // Singleton object
const instauser2 = {}   //Non Singleton object


instauser.id ="213svc"
instauser.name = "Samay"
instauser.isloggedin = false

console.log(instauser);

const regularuser = {
    fullname : {
        username : {
            first : "Krishnan",
            last : "Kaushik"
        } 
    }
}

//  console.log(regularuser.fullname.username.first);
//  console.log(instauser2);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const combined = Object.assign({},obj1,obj2)    // {}-> used because all the combined objects are stored in an empty object
// console.log(combined);

// Best option 
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));     // Form different array for different keys and values

console.log(instauser.hasOwnProperty("isloggedin"));




