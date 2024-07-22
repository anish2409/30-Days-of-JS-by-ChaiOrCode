const name = "Anish";
const age = 21;

const hero = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(hero);
hero.greet();