const user={
    username:"Shreyansh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()

console.log(this);

function chai(){
    let username="Shreyansh"
    console.log(this.username);
}

chai()

// ARROW FUNCTION

const chai2= () => {
    let username="Shreyansh"
    console.log(this.username);
}
chai2()

const addTwo=(num1,num2) => {
    return (num1+num2)
}

const addTwo2=(num1,num2) => ({username:"Shreyansh"})

console.log(addTwo2(3,4))

