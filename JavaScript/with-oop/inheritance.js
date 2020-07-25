const log = console.log

// Problem with object copying

// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return 'attack with ' + this.weapon
//   }
// }

// const peter = new Elf('Peter', 'stones');
// const ogre = {...peter}

// log('peter is ogre: ', peter === ogre)  // False
// ogre.attack()   // No attack method!

// Inheritance

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }
  makeFort() {
    return 'strongest fort ever'
  }
}

const peter = new Elf('Peter', 'stones', 'fighter');
log(peter)

const shrek = new Ogre('Shrek', 'club', 'green')
log(shrek.attack())
log(shrek.makeFort())

log('Ogre.isPrototypeOf shrek: ', Ogre.isPrototypeOf(shrek))
log('Ogre.prototype.isPrototypeOf shrek: ', Ogre.prototype.isPrototypeOf(shrek))
log('peter is instance of Elf: ', peter instanceof Elf)
log('peter is instance of Character: ', peter instanceof Character)
