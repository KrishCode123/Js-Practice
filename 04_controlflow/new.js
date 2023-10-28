const arr =["Sonu Nigam" ,  "Arijit Singh", "Shaan", "Kumar Sanu"]


for (const singers of arr) {
    console.log(singers);
}

const greet = "Hello World"

for (const g of greet) {
    console.log(`Each char in the string is ${g}`);
}

// Maps

const maps = new Map()

maps.set('IN','India')
maps.set('USA','United States of America')
maps.set('FR','France')

// console.log(maps);

// for (const [key, value] of maps) {
//     console.log(key ,':-', value);
// }

// const obj={
//     name1 :"kk",         *** forof not working
//     name2 : "krishnan"
// }

for (const key in maps) {
    console.log(key);
    
}
