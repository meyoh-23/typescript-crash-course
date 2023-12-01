"use strict";
// basic types
let id = 5;
let company = " Felix";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3];
let arr = [1, true, "felix",];
//tuple
let person = [11, "felix", false]; // the order is important
// tupple array
let employee;
// very much allowed
employee = [
    [1, "Felix"],
    [2, "John"],
    [3, "Kevin"]
];
// unios - for a variable to have more that one type
let pid = 345; // id can be a nubmer or a string
pid = "dufgjg53";
//Enums - enumerated types with typescript
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Upward Direction";
    Direction2["Down"] = "Downward direction";
    Direction2["Left"] = "to the left Direction";
    Direction2["Right"] = " to the right Direction";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
// objets
// method 1 for objects
const user = {
    id: 2,
    name: "jonny"
};
// declare the object while infering to the type alredy declared
const Students = {
    name: "Kevin",
    id: 3478,
    isSponsored: true
};
// type Assertion -explicitely telling the compliler that you want to treat an entity as a different type.
let cid = 1;
/* let customerId = <number>cid */ // first implementstion method. 
let customerID = cid; // second implementation method.
//functions
function addNum(x, y) {
    return `the sum of ${x} & ${y} is ${x + y}`;
}
console.log(addNum(5, 7));
// functions that have no return - void types
function toLog(message) {
    console.log(message);
}
toLog("hello my people");
const user1 = {
    userID: 2223,
    UserName: "User 1"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(3, 6));
console.log(sub(9, 6));
// classes
