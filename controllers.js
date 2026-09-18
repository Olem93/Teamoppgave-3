function takeItem(item) {
  coolMeter += item.Points
  setRandomEncounter()
}

function setRandomEncounter(){
  randomEncounter = Math.floor(Math.random()*7)
  console.log(randomEncounter)
  if (randomEncounter === 0){
    squirrelRoadkill()
  } else if (randomEncounter === 1) {
    policeDetection()
  } else if (randomEncounter === 2) {
    granmaTrigger()
  } else if (randomEncounter === 3) {
    meetBuddy()
  } else {
    updateView()
  }
}

function chance(percent){
    return rngMathRandom() <= percent;
}

//RNG funksjon
function rngMathRandom(){
    return Math.floor(Math.random()*100)+1;
}