// constructor functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return 'attack with ' + this.weapon
}

const peter = new Elf('Peter', 'stones');
console.log(peter.attack());

const sam = new Elf('sam', 'fire');
console.log(sam.attack());

const Elf1 = new Function(
  'name',
  'weapon',
  `
  this.name = name;
  this.weapon = weapon;
`
);

const sarah = new Elf1('Sarah', 'fireworks')
console.log(sarah.name);

