// When a function does not return anything, you can return void as the return type
const addNum = (num: number): void => {
    console.log("dmj")
}


// Function is a type in typescript
// This means the value of "da" must be a function
let da: Function;
da = addNum
// da = 4, this will return an error because the value of da has been declared to be a function and nothing less
// Further more we want "da" to take a functiion but not just any function so we describe the shape of the function we wany to accept

let daa: () => number;

// this means the value of daa must must be a function that takes no parameters and returns a number


let daad: (a:number, b:number) => number;


// Callbacks
// The call back can be a nother function and the result can be void 
const person = (a: number, b: number, cb:(c: number) => void) => {
    const result = a + b
    cb(result)
}

// UNKNOWN TYPE
// When you have no idea what a type might be, you can use unknown and assign any type to is without getting errors
let userinput: unknown

userinput = 3
userinput = "damilola"


// NEVER
// You can use never when throwing errors since technically it errors out and never returns anything
const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code }
}
console.log("dkvndvdd")

generateError("An error occured", 400)