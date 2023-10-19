const First ="Krishnan"
const Last ="Kaushik"


// console.log(First+" "+Last);

console.log(`Hii My name is ${First} ${Last} and I started coding a day ago`);

const gamename= new String('Krishnan-K-kaushik')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toLocaleLowerCase());
console.log(gamename.toUpperCase());


const newstring = gamename.substring(0,4)
const newstring2 = gamename.slice(-9,4)

console.table([newstring, newstring2])

const newstring3="    Krish.  nan. kaushijk. "
const newstring4 = newstring3.trim()

console.log(newstring4);


const url="https://krishnankaushik.com/krishnan%10kaushik"

console.log(url.replace('%10', '-'));
console.log(url.includes('krishnan'));
console.log(gamename.split('-',2))


