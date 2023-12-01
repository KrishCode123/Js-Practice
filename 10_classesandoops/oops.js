function user (username, logincount, isLoggedin){
    this.username = username
    this.logincount = logincount
    this.isLoggedin=isLoggedin

    this.greeting = () => {
        console.log(`Welcome!, ${this.username}`);
    }
    return this
}

const userone = new user("Krishnan" , 5 , true) 
    // new Keyword ki wajah se overwrite nahi hota nahi to userone print karo phir bhi usertwo overwrite hokar pahuch leta hai 
const usertwo = new user("ChaiaurCode" , 15 , false)

console.log(userone);
console.log(usertwo);