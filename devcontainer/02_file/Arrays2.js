const marve_heroes=["thor","ironman","hulk"]
const dc_heroes=["superman","batman","flash"]

// marve_heroes.push(dc_heroes)

// console.log(marve_heroes);
// console.log(marve_heroes[3][1]);

// const All_heroes=marve_heroes.concat(dc_heroes)
// console.log(All_heroes);

const All_heroes=[...marve_heroes,...dc_heroes]
console.log(All_heroes);

const Another_arr=[1,2,3,[4,5,6],7,[8,9]]
const real_another_arr=Another_arr.flat(Infinity)
console.log(real_another_arr)

console.log(Array.isArray("Sheryansh"));
console.log(Array.from("Shreyansh"));
console.log(Array.from({name:"Shreyansh"}))   //Important

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))