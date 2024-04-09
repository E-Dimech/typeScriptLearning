"use strict";
let stringArr = ["one", "hey", "Eric"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1986, true];
stringArr[0] = "John";
stringArr.push("dave");
guitars[0] = 1984;
guitars.unshift("Jimi");
let test = [];
let bands = [];
bands.push("Van");
//Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Eric",
    prop2: true,
};
exampleObj.prop2 = true;
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `HELLO ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
// Enums
// Unlike most TypeScript features, Enums are not a
// type-level addition to JavaScript but something
// added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 1] = "F";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.F);
