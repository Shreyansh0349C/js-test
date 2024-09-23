const tinderuser={}

tinderuser.id="123@gmail.com"
tinderuser.name="Sammmy"
tinderuser.isLoggedIn=false

// console.log(tinderuser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"Shreyansh",
            latname:"Katiyar"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4={obj1, obj2}
// const obj5=Object.assign({},obj1,obj2,obj3,obj4)

const obj6={...obj1,...obj2,...obj3}

// console.log(obj4)
// console.log(obj5)
// console.log(obj6)

const users=[{
    id1:1,
    email:"hotmail.com"
    },

    {
    id2:2,
    email:"email.com"
    }   ,
    {
    id3:3,
    email:"xyz.com"
    }
]

// users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]