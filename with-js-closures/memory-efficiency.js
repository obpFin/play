function heavyDuty(item) {
  const bigArray = new Array(7000).fill('😄')
  console.log("I'm heavy duty!");
  return bigArray[item]
}

heavyDuty(699)
heavyDuty(699)
heavyDuty(699)

const getHeavyDuty = heavyDuty2();
getHeavyDuty()
getHeavyDuty()
getHeavyDuty()

function heavyDuty2() {
  const bigArray = new Array(7000).fill('😄')
  console.log("I'm run only once!")
  return function(item) {
    return bigArray[item]
  }
}