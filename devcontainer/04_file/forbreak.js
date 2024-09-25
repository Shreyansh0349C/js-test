// FOR

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(element)
// } 

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if (i==5) {
//         console.log(`5 is best`)
//     }
//     console.log(element)
// } 

// Break

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if (i==5) {
//         console.log(`5 is best`)
//         break
//     }
//     console.log(element)
// } 

// Continue

for (let i = 0; i <=10; i++) {
    const element = i;
    if (i==5) {
        console.log(`5 is best`)
        continue
    }
    console.log(element)
} 


for (let i = 0; i < 10; i++) {
    console.log(`Outer loop is ${i}`)
    for (let j=0; j<10; j++){
        console.log(`Outer loop is ${i} and Inner loop is ${j}`)
    }
}



