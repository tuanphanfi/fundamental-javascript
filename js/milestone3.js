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
let lengthOfNameArray = [];
let nameInUpperCaseArray = [];
let initialArray = [];
let multipleOneHundredArray = [];
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
    lengthOfNameArray = inventors.map((item, index) => {
        // console.log(item.length)
        return item.length

    })
    console.log(lengthOfNameArray)
}

// Print out all the inventors' names in uppercase.
printOutNameInUpperCase = () => {
    nameInUpperCaseArray = inventors.map((item, index) => {
        return item.toUpperCase()
    })
    console.log(nameInUpperCaseArray)
}

// Print out initials of all inventors(e.g. A.E., I.N., ...)
printOutInitial = () => {
    initialArray = inventors.map((item, index) => {
        let result = [];
        result = item.split(" ")
        // console.log(result[0])
        return result[0][0] + "." + result[1][0]
    })
    console.log(initialArray)
}

// Print out an array of every number multiplied by 100.
printOutMultiple100 = () => {
    multipleOneHundredArray = numbers.map((item,index)=>{
        return item*100
    })
    console.log(multipleOneHundredArray)
}

// printOutTheFirstName()
// printOutTheLengthOfFullName()
// printOutNameInUpperCase()
// printOutInitial()
printOutMultiple100()