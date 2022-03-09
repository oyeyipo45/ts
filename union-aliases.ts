

// UNION 
// Use union where you have a type of parameter that can accept more than one type

const combine = (a: number | string | boolean, b: number | string, values : 'as-number' |  "as-text") => {
    let result;
    if (typeof a == 'number' && typeof b == 'number') {
        result = a + b
    } else {
      result =   a.toString() + b.toString()
    }
    return result
}

console.log(combine(3, 4, "as-text"))

console.log(combine('dami', 'oye', "as-text"))


// TYPE ALIASES
// Instead of having the union types directly you can create a custom type like below

type Combinable = number | string

const data : { name : Combinable }  = {
    name : "damilola"
}

const fill = (a: number, b: Combinable) => {
    return a + +b
}