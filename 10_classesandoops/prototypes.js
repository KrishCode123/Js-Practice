const newheros = ['Thor' , 'Spiderman']

let heropower ={
    thor : "Hammer",
    spiderman : "Swing",

    getheropower : function() {
        console.log(`Spidy has the power to ${this.spiderman}`);
    }
}

Object.prototype.krishnan = function(){
    console.log(`Krishnan is Present in all objects`);
}

newheros.krishnan()

// heropower.krishnan()

// Inheritances

const user = {
    username : "Krishnan",
    Email : "krishnan@chai.com"
}

const teacher = {
    makeVideo : true
} 

const Prteam = {
    isavailable : false,
    __proto__: teacher
}

const TAsupport = {
    makeassignment : true,
    type : 'Make JS Assignment',
    fulltime: true,
    __proto__: Prteam
}

teacher.__proto__ = user

// Modern
Object.setPrototypeOf(Prteam ,TAsupport)




