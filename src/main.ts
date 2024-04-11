class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `Hello, I'm ${this.age}`;
  }

  public getMusic() {
    return `Hello, I like ${this.music}`;
  }
}

const Eric = new Coder("Eric", "Rock", 37);
console.log(Eric.getAge());
// console.log(Eric.age);
// console.log(Eric.lang);
console.log(Eric.getMusic());
