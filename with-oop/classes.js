// ES6 classes
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}

const peter = new Elf('Peter', 'stones');
console.log('peter is elf: ', peter instanceof Elf)
console.log(peter.attack());

const sam = new Elf('sam', 'fire');
console.log(sam.attack());
