// Memories
// Stack (Primitve)
let myName="Shreyansh"
let anotherName=myName
console.log(anotherName)

// Heap(Non-Primitive)
let user={
    email:"jpk@gmail.com",
    upi:"123@ybl"
}
let userTwo=user
userTwo.email="shreyansh@gmail.com"
console.log(user.email)
console.log(userTwo.email)