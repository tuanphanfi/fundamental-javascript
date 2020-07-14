// milestone 3

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

let firstNameArray = [];
let lenghOfInventorFullname = [];
let inventorNameSameLetter = [];
let oddNumberArray = [];
let twoDigitNumberArray = [];
let primeArray = [];
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

// Print out the first name of each inventor.
printOutTheFirstName = () => {
    firstNameArray = inventors.map((item, index) => {
        // console.log(item)
        let result = [];
        result = item.split(" ")
        // console.log(result[0])
        return result[0]
    })
    console.log(firstNameArray)
}

// Print out the length of every inventor's full name.
printOutTheLengthOfFullName = () => {
    lenghOfInventorFullname = inventors.map((item, index) => {
        // console.log(item.length)
        return item.length

    })
}

// Print out all the inventors' names in uppercase.

// Print out initials of all inventors(e.g. A.E., I.N., ...)

// Print out an array of every number multiplied by 100.

// printOutTheFirstName()
printOutTheLengthOfFullName()