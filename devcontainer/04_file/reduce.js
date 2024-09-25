const MyNums=[1,2,3]

// const MyTotal=MyNums.reduce(function(acc,currval){
    // console.log(`${acc} and ${currval}`)
    // return acc + currval
// } ,0)

const MyTotal=MyNums.reduce((acc,curr)=> acc+curr ,0)
// console.log(MyTotal)

const ShoppingCart=[
    {
        itemname:"js course",
        itemprice:999
    },
    {
        itemname:"python",
        itemprice:1999
    },
    {
        itemname:"java",
        itemprice:2999
    }
]

const PricetoPay=ShoppingCart.reduce((acc,item)=> acc + item.itemprice,0)

console.log(PricetoPay);