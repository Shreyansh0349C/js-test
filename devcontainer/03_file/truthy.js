const UserEmail=[]

if (UserEmail){
    console.log("Got the email");
}else{
    console.log("Dont got the mail")
}

// Falsy Values

// false,0,-0,BigInt,"",null,undefined,null

// Truthy Values

// if (UserEmail.length==0){
//     console.log("Array is Empty");
// }

const emptyObj={}
if (Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null underfined

let Val1;
// Val1=5 ?? 10
// Val1=null??10
// Val1=undefined??20
// Val1=null??10??20
// console.log(Val1)

// Terniary Operator
// consition ? true: false

const iceTeaPrice=100
// iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")