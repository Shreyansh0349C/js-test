// if

const isUserLoggedIn=true
const temprature=41
// if (temprature==40) {
//     console.log("Less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }    

// console.log("Execute");
// <,>,<=,>=,==,!=,===,!==

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`)


const balance=1000
// if (balance>500) {
//     console.log("less than 500")
// }else if (balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 900")
// }

// if (balance>500) console.log("test"),console.log("test2");

const userLoggedIn=true
const debitCard=true
const loggedInfromGoogle=false
const loggedInfromEmail=true

if (userLoggedIn && debitCard){
    console.log("Allow")
}

if (loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged In")
}