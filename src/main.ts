//interface vs type
//use interface when defining something like a class or object
//syntax > remove = before object
//type aliases > for any type of typescript type

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

//Literal types
let myName: "Eric";

let userName: "Eric" | "John" | "Amy";
userName = "Eric";

//functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

logMsg(subtract(6, 3));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction { (a: number, b: number): number};

let multiply: mathFunction = function (c, d) {
  return c * d;
};

let altMultiply = (g: number, h: number): number => {
  return g * h;
};

logMsg(multiply(2, 4));
logMsg(altMultiply(2, 4));

//optional parameters
//if else check required for optional paramenters
//optional parameters must go last after ALL required ones
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
//default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

const newTotal = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));
logMsg(newTotal(1, 2, 3));

//never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

//use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};
