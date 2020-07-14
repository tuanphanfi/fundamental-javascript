// milestone 5 // Reduce

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
//reduce => reduce the array to a number
// array.reduce(accumlator, item())

// Find the sum of all the numbers.
sumAll = () => {
    let result = numbers.reduce((accumulator, number) => accumulator + number, 0)
    console.log("sum", result)
}

// Find the sum of all the even numbers.
sumOfEven = () => {
    let result = numbers.reduce((accumulator, numbers) => {
        if (numbers % 2 == 0) {
            // console.log(accumulator)
            return accumulator + numbers

        }

        else
            return accumulator
    }, 0) // 0 to set accumulator = 0
    console.log("sum of even", result)
}

// Create a string that has the first name of every inventor.
createAString = () => {
    let result = inventors.reduce((accumulator, item) => {
        return accumulator + " " + item.split(" ")[0] + ","
    },"") //empty string for the first value of ACCUMULATOR
    console.log("First name of every inventor: ", result)
}

sumAll()
sumOfEven()
createAString()