// Reduce 

// const num = [1,2,3,4,5]

// const mynum = num.reduce( (acc,curr) => {
//     return(acc+curr)
// },0)


// console.log(mynum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce((acc,curr)=>{
    return (acc+curr.price)

},0)

// sum =0
// shoppingCart.forEach((i) => {
//     sum += (i.price)
// })


console.log(total);