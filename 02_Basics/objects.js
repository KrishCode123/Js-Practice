// Singleton
// Object.create

// Object Literals 
const mysym = Symbol("key1")

const JSuser ={
    name : "Krishnan",
    "full name" : "Krishnan Kaushik",
    [mysym] : "mykey1",
    age : 20,
    email : "krishnan@google.com",
    islogin : true,
    lastlogin : ["Mon", "Tue"]
}

// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["full name"]);   //Have to use the paranthesis only
// console.log(JSuser[mysym]);
// console.log(typeof JSuser[mysym]);

JSuser.email = "krishnan@microsoft.com"
// Object.freeze(JSuser);
JSuser.email = "kk@microsoft.com"
// console.log(JSuser);


JSuser.greetings = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JSuser.greetings());
console.log(JSuser.greetings);

