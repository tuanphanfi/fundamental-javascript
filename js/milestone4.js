// milestone 3 // Sort

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

// Sort all the inventors in alphabetical order, A-Z.
sortAtoZ = () => {
    inventors.sort()
    console.log(inventors)
}

// Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
sortZtoA = () => {
    inventors.sort((a, b) => {
        if (a > b)
            return -1
        else
            return 1
    })
    console.log(inventors)

}

// Sort all the inventors by length of name, shortest name first.
sortByTheLengthShortestFirst = () => {
    inventors.sort((a, b) => {
        // if (a.length > b.length) {
        //     return 1
        // } else
        //     return -1
        return a.length - b.length //for number
    })
    console.log(inventors)
}

// Sort all the inventors by length of name, longest name first. Do not use the reverse method.
sortByTheLengthLongestFirst = () => {
    inventors.sort((a, b) => b.length - a.length)
    console.log(inventors)
}
// if there is a {}, need to return something.
// without {} just place a equation/expression

// sortAtoZ()
// sortZtoA()
// sortByTheLengthShortestFirst()
sortByTheLengthLongestFirst()