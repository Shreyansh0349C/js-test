// var c=300  Do not use 
let a=30
if(true){
    let a=300
    const b=10
    console.log(`Inner : ${a}`)
}
console.log(`Outer value is ${a}`)

if(true){
    const username="Sheryansh"
    if (username==="Sheryansh"){
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website)  Cannot be accessed outside the loop
}
    // console.log(username)  Cannot be accessed outside the loop

console.log(addone(5))

function addone(num){
    return num+1
}


// Hoisting

addTwo(5)
const addTwo=function(num){
    return num +2
}


