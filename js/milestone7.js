// milestone 7 Find / FindIndex

const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

// Find the inventor that has a middle name.
const inventorHasMiddleName = (e) => {
    let midname = e.split(' ')
    return midname.length > 2
}
console.log("Inventor that has a middle name:", inventors.find(inventorHasMiddleName))

// Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)


// Find the number divisible by 7.
const divisibleBy7 = (e) => e % 7 == 0
// console.log("Number divisible by 7 are:", numbers.find(divisibleBy7))

// Bonus: Return a new array, that only has the numbers that are not divisible by 7


