const name = "khoirunisa"
const map = Array.prototype.map

const newName = map.call(name, eachLetter => {
    return `${eachLetter}sa`
})

console.log(newName [8])