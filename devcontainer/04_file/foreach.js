const coding=["java","python","c++","swift"]

coding.forEach(function (val1){
    // console.log(val1);
})

coding.forEach((item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding=[
    {
        languagename:"js",
        languagefilename:"java"
    },
    {
        languagename:"py",
        languagefilename:"pyhton"
    },
    {
        languagename:"swift",
        languagefilename:"swift"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languagefilename)
})