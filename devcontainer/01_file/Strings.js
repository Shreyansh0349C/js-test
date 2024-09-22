const Name="Shreyansh"
const Repocount=10
// console.log(NAme+Repocount+"Value")

console.log(`Hello my name is ${Name} and my repocount is ${Repocount}`)

const gamename= new String("SShreyansh")
const gamename1="Shreyansh-2004-20"

console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf("t"))

const Newstring= gamename.substring(0,4)
console.log(Newstring)

const Anotherstring=gamename.slice(0,4)
console.log(Anotherstring)

const Newstringone="    shreyansh    "
console.log(Newstringone)
console.log(Newstringone.trim())

const url="https://shreyansh.com/%20"
console.log(url.replace('%20','-'))
console.log(url.includes('shreyansh'))

console.log(gamename1.split('-'))