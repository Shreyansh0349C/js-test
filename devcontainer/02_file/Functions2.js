// FUNCTIONS 2

// function claculateCartPrice(...num1){
//     return num1
// }
// console.log(claculateCartPrice(200,300,400,500))

// function claculateCartPrice2(value1,value2,...num1){
//     return num1
// }
// console.log(claculateCartPrice2(200,300,400,500,600))

const user={
    username:"Shreyansh",
    prices:900
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.prices}`)
}

// handleObject(user)

handleObject({
    username:"Sam",
    prices:600
})

const MyNewArray=[100,200,300,400]
function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([200,300,400,900]))
