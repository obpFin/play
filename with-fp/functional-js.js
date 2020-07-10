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