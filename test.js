
//  numbers = []

let sum = numbers.reduce((total, item) => {
    // console.log("total", total)
    // console.log("item", item)
    return total += item
})

let multiple = numbers.reduce((total, item) => {
    return total *= item
})

let doubleValue = []
let double = numbers.map((items, index) => {
    doubleValue.push(items * 2)
    console.log(doubleValue)
})
// console.log(sum)
// console.log(multiple)
