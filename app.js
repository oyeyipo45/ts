"use strict";
// When a function does not return anything, you can return void as the return type
var addNum = function (num) {
    console.log("dmj");
};
// Function is a type in typescript
// This means the value of "da" must be a function
var da;
da = addNum;
// da = 4, this will return an error because the value of da has been declared to be a function and nothing less
// Further more we want "da" to take a functiion but not just any function so we describe the shape of the function we wany to accept
var daa;
// this means the value of daa must must be a function that takes no parameters and returns a number
var daad;
// Callbacks
// The call back can be a nother function and the result can be void 
var person = function (a, b, cb) {
    var result = a + b;
    cb(result);
};
// UNKNOWN TYPE
// When you have no idea what a type might be, you can use unknown and assign any type to is without getting errors
var userinput;
userinput = 3;
userinput = "damilola";
// NEVER
// You can use never when throwing errors since technically it errors out and never returns anything
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
console.log("dkvndvdd");
generateError("An error occured", 400);
