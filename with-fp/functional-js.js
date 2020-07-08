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