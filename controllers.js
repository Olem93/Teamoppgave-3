function takeItem(item) {
  coolMeter += item.Points
  updateView()
}

function setRandomEncounter(){
  //randomEncounter = Math.floor(Math.random()*5)
  randomEncounter = 3
  if (randomEncounter === 0){
    squirrelRoadkill()
  } else if (randomEncounter === 1) {
    policeControl()
  } else if (randomEncounter === 2) {
    granmaTrigger()
  } else if (randomEncounter === 3) {
    meetBuddy()
  }
}

function chance(percent){
    return rngMathRandom() <= percent;
}

//RNG funksjon
function rngMathRandom(){
    return Math.floor(Math.random()*100)+1;
}