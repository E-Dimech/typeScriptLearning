"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
    getMusic() {
        return `Hello, I like ${this.music}`;
    }
}
const Eric = new Coder("Eric", "Rock", 37);
console.log(Eric.getAge());
// console.log(Eric.age);
// console.log(Eric.lang);
console.log(Eric.getMusic());
