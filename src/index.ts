// basic types
let id: number = 5;
let company: string = " Felix";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3];
let arr: any[] = [1, true, "felix",];

//tuple
let person: [number, string, boolean] = [11, "felix", false] // the order is important

// tupple array
let employee:[number, string][]

// very much allowed
employee = [
    [1, "Felix"],
    [2, "John"],
    [3, "Kevin"]
]

// unios - for a variable to have more that one type
let pid: string | number = 345; // id can be a nubmer or a string
pid = "dufgjg53";

//Enums - enumerated types with typescript
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}
enum Direction2 {
    Up = "Upward Direction",
    Down = "Downward direction",
    Left = "to the left Direction",
    Right = " to the right Direction",
}

console.log(Direction2.Up);

// objets
// method 1 for objects
const user: {
    id:number,
    name: string
} = {
    id: 2,
    name: "jonny"
}

// method 2 for objects - declare the datatype first
type student = {
    name: string
    id: number
    isSponsored: boolean
}
 // declare the object while infering to the type alredy declared
const Students: student = {
    name: "Kevin",
    id: 3478,
    isSponsored: true
}

// type Assertion -explicitely telling the compliler that you want to treat an entity as a different type.
let cid: any = 1;
/* let customerId = <number>cid */ // first implementstion method. 
let customerID = cid as number; // second implementation method.

//functions
function addNum(x: number, y: number): string{
    return `the sum of ${x} & ${y} is ${x + y }`;
}

console.log(addNum(5,7));

// functions that have no return - void types
function toLog(message: string | number): void {
    console.log(message)
}
toLog("hello my people");

// interfaces
interface USerInterface {
    userID: number,
    UserName: string
}
const user1: USerInterface = {
    userID: 2223,
    UserName: "User 1"
}

// interface with fuctions
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;

console.log(add(3,6));
console.log(sub(9,6));

// classes
