class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal {
    constructor(name, age, isMammal) {
        super(name, age, true);
    }
    eat() {
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    constructor(name, age, isMammal) {
        super(name, age, false);
    }
    fly() {
        return `${this.name} sedang terbang!`;
    }
}

//instances
const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);

console.log(typeof Eagle);
