// milestone 2

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

let inventorsNameStartWithA = [];
let inventorsNameContainN = [];
let inventorNameSameLetter = [];
let oddNumberArray = [];
let twoDigitNumberArray = [];
let primeArray = [];
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//Print out an array of the inventors whose name start with A
function printOutArrayStartWithA() {
    inventorsNameStartWithA = inventors.filter((word) => {
        return (word[0] === 'A')
    })
    console.log(inventorsNameStartWithA)

}

//Print out an array of the inventors whose name contains 'n'.
function printOutArrayContainN() {
    inventorsNameContainN = inventors.filter((word) => word.includes('n'))
    console.log(inventorsNameContainN)
}

//Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
function printOutArraySameLetter() {
    inventorNameSameLetter = inventors.filter((words) => {
        for (let i = 0; i < words.length; i++) {
            if (words[i] === words[i + 1])
                return true
        }
    })
    console.log(inventorNameSameLetter)
}

// Print out an array of the numbers which are odd.
function printOutArrayOddNumber() {
    oddNumberArray = numbers.filter((num) => {
        return ((num + 1) % 2 == 0);
    })
    console.log(oddNumberArray)
}

//Print out an array of the numbers that have two digits.
function printOutArrayTwoDigitNumber() {
    twoDigitNumberArray = numbers.filter((num) => {
        return (num.toString().length == 2)
    })
    console.log(twoDigitNumberArray)
}


isPrime = (number) => {
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            return false
        }

    }

    return true

}

// Print out an array of the numbers which are prime.
printOutArrayPrime = () => {
    primeArray = numbers.filter((num) => {
        return isPrime(num)

    })



    console.log(primeArray)
}

// printOutArrayStartWithA()
// printOutArrayContainN()
// printOutArraySameLetter()
// printOutArrayOddNumber()
// printOutArrayTwoDigitNumber()
// printOutArrayPrime()