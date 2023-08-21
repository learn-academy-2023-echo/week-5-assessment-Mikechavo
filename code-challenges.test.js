// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.


describe("codedMessage", () => {
  it("returns a string with a coded message", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
//create function using the .replace method to replace a, e, i, o, with the numbers given. .replace(/a/g, '4')
//make sure to account for caps, A, a

const codedMessage = (string) => {
  return string 
    .replace(/a/g, '4')
    .replace(/A/g, '4')
    .replace(/e/g, '3')
    .replace(/E/g, '3')
    .replace(/i/g, '1')
    .replace(/I/g, '1')
    .replace(/o/g, '0')
    .replace(/O/g, '0')
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("filteredWordsByLetters", () => {
  it("returns an array of all the words containing that particular letter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
    const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]
  expect(filteredWordsByLetters(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
  expect(filteredWordsByLetters(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})


// b) Create the function that makes the test pass.

// Pseudo code:
// use .filter() and includes() methods to filter

const filteredWordsByLetters = (array, letter) => {
  return array.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("isAFullHouse", () => {
  it("determines whether or not the array is a full house", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
  expect(isAFullHouse(hand1)).toBe(true)  
  expect(isAFullHouse(hand2)).toBe(false)  
  expect(isAFullHouse(hand3)).toBe(false)  
  expect(isAFullHouse(hand4)).toBe(true)  
  })
})


// b) Create the function that makes the test pass.

// Pseudo code:
// take in the array set a new varible called fullCounts = new Map()
//create a for loop set up the iteration for each element being a num in the hand's array one by one
// create an if, fullCounts.has(num) to check fullCounts 
//  new Map() creates a new Map object
//create an else if the num is not in fullCounts 
// use .has() to return true if key exists in Map
// use .set() to set the value for a key in the Map
// use .get() to get the value for the Key in the Map
// use Array.from to create an array from the values map.

const isAFullHouse = (hand) => {
  const fullCounts = new Map();

  for (const num of hand) {
    if (fullCounts.has(num)) {
      fullCounts.set(num, fullCounts.get(num) + 1);
    } else {
      fullCounts.set(num, 1);
    }
  }

  const counts = Array.from(fullCounts.values());

  return counts.includes(2) && counts.includes(3);
}




