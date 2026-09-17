function takeItem(item) {
  console.log(item.Points)
  coolMeter += item.Points
  updateView()

}

function setRandomEncounter(){
  //randomEncounter = Math.floor(Math.random()*5)
  randomEncounter = 0
  if (randomEncounter === 0){
    squirrelRoadkill()
  }
}