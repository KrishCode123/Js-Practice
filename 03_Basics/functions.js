// function addnums(num1, num2) {
//     console.log(num1+num2)
// }

function addnums(num1,num2){
    const res = num1 + num2
    return res  
}

const res= addnums(3,4)
console.log("Result : ", res)

function loggedin(username="sam"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
    
}

// console.log(loggedin("Krishnan"))
// console.log(loggedin());

function calculatecartprice(...num){
    return num
}
console.log(calculatecartprice(500,600,910));


function calculatecartprice2(val1,val2,...num3){
    return num3
}
console.log(calculatecartprice2(500,600,910,5007));

const objectlist ={
    username : "Krishnan",
    price : 199
}

function holdobjects(anyobj){
    console.log(`The username is ${anyobj.username} and the price is ${anyobj.price}`);
}

holdobjects(objectlist)
holdobjects({
    username : "sam",
    price : 299
})