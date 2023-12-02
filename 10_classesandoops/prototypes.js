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

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// Modern
// Object.setPrototypeOf(Prteam ,TAsupport)

let myname = "Krishnan        "

String.prototype.trueLength = function (){
    console.log(this);
    console.log(`The True Length is: ${this.trim().length}`);
}

myname.trueLength()




