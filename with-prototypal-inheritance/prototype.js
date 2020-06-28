const log = console.log

let human = {
  mortal: true
}

let socrates = Object.create(human)     // Create prototype chain
socrates.age = 45
log('socrate ',socrates)
log(human.isPrototypeOf(socrates))      // true

