const log = console.log

let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

// log(dragon.sing())

let lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  },
};

// lizard.__proto__ = dragon
// log(lizard.sing());

lizard.__proto__ = dragon
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    log(prop)
  }
}

function multiplyBy5(num) {
  return num*5
}

log(multiplyBy5.__proto__)   // points to Function prototype
log(Function.prototype)      // same pointer

const array = []
log('array proto hasOwnProperty map: ', array.__proto__.hasOwnProperty('map'))  // true

log(Object.prototype)        // Base Object prototype

