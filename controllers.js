function takeItem(item) {
  coolMeter += item.Points
  updateView()
}

function setRandomEncounter(){
  //randomEncounter = Math.floor(Math.random()*5)
  randomEncounter = 1
  if (randomEncounter === 0){
    squirrelRoadkill()
  } else if (randomEncounter === 1) {
    policeControl()
  }
}

function chance(percent){
    return rngMathRandom() <= percent;
}

//RNG funksjon
function rngMathRandom(){
    return Math.floor(Math.random()*100)+1;
}