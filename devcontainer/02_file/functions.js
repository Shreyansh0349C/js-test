//FUNCTIONS

// function sayMyName(){
//     console.log("S")
//     console.log("H")
//     console.log("R")
//     console.log("E")
//     console.log("Y")
//     console.log("A")
//     console.log("N")
//     console.log("S")
//     console.log("H")
// }

// sayMyName()

function addTwoNumbers(number1,number2){
    // console.log(number1+number2)
}

function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}
const result=addTwoNumbers(3,5)
// console.log(`Your Result is ${result}`)

function loginUserName(username=""){
    if (!username){
        console.log("enter a username");
        return
    }
    return(`${username} just logged in`)
}

// console.log(loginUserName("Shreyansh"))

