//DATES

let myDAte=new Date()
console.log(myDAte.toString())
console.log(myDAte.toDateString())
console.log(myDAte.toLocaleDateString())
console.log(typeof myDAte);

let myCreatedDate= new Date(2024,4,23)
let myCreatedDate1= new Date(2024,4,23,5,4)
let myCreatedDate2= new Date("2024-05-24")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp=Date.now()
comsole.log(myTimeStamp)
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let NewDate=new Date()
console.log(NewDate);
console.log(NewDate.getMonth+1);
console.log(NewDate.getDay());

`${NewDate.getDay()} and the time`

NewDate.toLocaleString('default',{
    weekday:"long"
})

