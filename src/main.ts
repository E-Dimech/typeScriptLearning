let myName: string = "Eric";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "John";
meaningOfLife = 42;
isLoading = true;
album: 5150;

const sum = (a: number, b: number) => {
  return a + b;
};

let postId: string | number; //union type
let isActive: number | boolean;

// to help typeScript infer that this variable is a RegExp
// let re = /\w+/g

let re: RegExp = /\w+/g;
