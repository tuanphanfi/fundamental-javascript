// milestone 6 //Some/Every

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

// Does any inventor have the letter 'y' in their name?
const containY = (element) => element.includes('y')
console.log("Y in their name:", inventors.some(containY))
// anyYinName = () => {
//     inventors.some((name) => {
//         containY
//     })
//     // console.log(object)
// }

// Does every inventor have the letter 'e' in their name?
// eInEveryName = () => {

// }
const containE = (e) => e.includes('e')
console.log("E in their name:", inventors.every(containE))

// Does every inventor have first name that's longer than 4 characters?
const longerThan4 = (e) => e.length > 4
console.log("Every name length is longer than 4: ", inventors.every(longerThan4))

// anyYinName()