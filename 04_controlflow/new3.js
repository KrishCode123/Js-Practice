// const coding =['js','java','pyhton','ruby','cpp']

// // coding.forEach(function (item){
// //         console.log(item);
// // })

// coding.forEach ( (i,j,k) => {
//     console.log(i,j,k);     //i=>item j=>index k=>full array
// })

// // function code(item){
// //     console.log(item);
// // }

// // coding.forEach(code)


const coding = [
    {
        language : "Javascript",
        notation : "js"
    },
    {
        language : "Java",
        notation : "java"
    },
    {
        language : "pyhton",
        notation : "py"
    }
]

coding.forEach( (item) => {
    console.log(`The Language ${item.language} has a notation ${item.notation}`);

})