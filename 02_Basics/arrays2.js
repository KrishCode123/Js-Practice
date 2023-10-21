const marvel_heros = ["Ironman", "Thor", "Hulk"]
const dc_heros  = ["Batman", "Superman", "Flash"]

//marvel_heros.push(dc_heros)     // Treating the array as an element
// console.log(marvel_heros);

// console.log(marvel_heros[3][0])

const allheros = marvel_heros.concat(dc_heros)  // Concates the two array and stores in a new array 
//console.log(allheros);


//const all_new_heroes=[...marvel_heros,...dc_heros]
//console.log(all_new_heroes);        // Can be used instead of concat  ...-> spread operator 
// It is different from concat in such a way that it can add more than 2 arrays together

// const another_arr=[1,2,3,4,5,[6,4,7],4,5,[6,7]]
// const newarr_another= another_arr.flat(Infinity)
// console.log(newarr_another);

console.log(Array.isArray("Krishnan"))
console.log(Array.from("Krishnan"));
console.log(Array.from({name : "Krishnan"}))

const s1 =100;
const s2 =200;
const s3 =300;

console.log(Array.of(s1,s2,s3));