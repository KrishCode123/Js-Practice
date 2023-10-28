const user = {
    username : "Krishnan",
    price : 199,
    welcomemessage : function (){
        // console.log(`${this.username}, Welcome to the website!`)
        // console.log(this);
    }
}
user.welcomemessage()
user.username="sam"                    
user.welcomemessage()

// function chai (){
//     let username = "Krishnan"
//     console.log(this.username);
// }
// chai()


// const chai=   () => {
//     let username = "Krishnan"
//     console.log(this);
// }
// chai()

// const addnums = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addnums(3,4))

const addnums = (num1, num2) => (num1 + num2)
console.log(addnums(3,4))


