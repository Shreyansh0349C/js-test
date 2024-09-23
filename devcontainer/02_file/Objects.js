// Object Literals

const MySys=Symbol("key1")

const JsUser={
    name:"Shreyansh",
    fullname:"Shreyansh Katiyar",
    [MySys]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"shreyansh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[MySys])

// JsUser.email="shreyansh@gmail.com"
// Object.freeze(JsUser);
// JsUser.email="shreyansh@google.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS USer,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());