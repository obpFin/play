// Side effects

const log = console.log

// no side-effects
// input --> output

log('with side-effects')
const array = [1,2,3]
function mutateArray(arr) {
  arr.pop()
}
mutateArray(array)
log(array)

log('with no side-effects')
const array2 = [1,2,3]
function removeLastItem(arr) {
  const newArr =[].concat(arr)
  newArr.pop()
  log(newArr)
  return newArr
}
removeLastItem(array2)

// Idempotence

function  notGood(num) {
  return log(num)
}

notGood(2)

log(Math.abs(53))

// Immutability

const obj = {name: 'Kelly'}
function clone(obj) {
  return {...obj}   // This is pure
}

function updateName(obj) {
  const obj2 = clone(obj)
  obj2.name = 'Nana'
  return obj2
}

// HOF
// Either takes one or more functions as arguments, or returns a function (callback)

const hof = (fn) => fn(5)
log('hof:', hof(function a(x){return x}))
  
// Closure
// function has access to outer function scope

const closure = function() {
  let count = 0;
  return function increment() {
    count++
    return count
  }
}
const incrementFn = closure()
log('closure: ', incrementFn())

// Currying
// Modify function and it's parameters
// Expects one argument at a time

const multiply = (a, b) => a*b
const curriedMultiply = (a) => (b) => a*b
log('curriedMultiply', curriedMultiply(3)(4))

const curriedMultiplyByFive = curriedMultiply(5)
log('curriedMultiplyByFive', curriedMultiplyByFive(4))

// Partial application
// Take a function and create a new one with one or more of its arguments already “set” or partially applied
// Expects all arguments

const multiply2 = (a, b, c) => a*b*c
const partialMultiplyByFive = multiply2.bind(null, 5)
log('partialMultiplyByFive', partialMultiplyByFive(4, 10))

// Memoization
// Store function return values to be accessed later
function addTo80(n) {
  return n + 80
}

function memoizedAddTo80() {
  let cache = {}
  return function(n) {
    if (n in cache) {
      return cache[n]
    }
    console.log('Long time...')
    cache[n] = n + 80
    return cache[n]
  }
}
const memoized = memoizedAddTo80()

log('memoizedAddTo80', memoized(5))
log('memoizedAddTo80', memoized(5))