"use strict";
// UNION 
// Use union where you have a type of parameter that can accept more than one type
var combine = function (a, b, values) {
    var result;
    if (typeof a == 'number' && typeof b == 'number') {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
};
console.log(combine(3, 4, "as-text"));
console.log(combine('dami', 'oye', "as-text"));
var data = {
    name: "damilola"
};
var fill = function (a, b) {
    return a + +b;
};
