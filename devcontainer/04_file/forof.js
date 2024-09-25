// for of
// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const num  of arr) {
    // console.log(num);
}

const greetings='Hello World'
for (const greet of greetings) {
    // console.log(greet)
}

// Maps

const map= new Map()
map.set('IN','India')
map.set('Fr','France')
map.set('Gr','Greece')
// console.log(map)

for (const [key,Value] of map) {
    // console.log(`${key} :- ${Value}`)
}

// const MyObj={
//     game1:"NFS",
//     game2:"GOW"
// }

// for (const obj of MyObj) {
//     console.log(`${key} :- ${Value}`);
// }