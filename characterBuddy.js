// characterBuddy.js

let highCoolDialogs = [
  "Oi, sjekk den fete bilen!",
  "Damn, my boy!",
  "Takk, bro!" 
];

let lowCoolDialogs = [
   "Halla.", 
   "yo...",
   "den er grei..."
];

let wrongAnswer = [
  "Oi, det så ikke ut som om de likte det...",
  "Vennen din ser ikke blid ut. De forventet nok noe annet..."
]

let venner = [
  "Lars Monsen",
  "Rebecka",
  "Geir",
  "Eskil",
  "Terje",
  "Jens",
  "Per Gynt",
]

function meetBuddy(){
  message = /*HTML*/ `Du møter en venn. Det er ${venner[Math.floor(Math.random() * venner.length)]}!
  Vennen din hilser. Hva sier du?
  <br>
  <button onclick="buddyDialog()">Halla broshan!</button>
  <br>
  <button onclick="buddyDialog()">Ut på tur, aldri sur.</button>
  <br>
  <button onclick="buddyDialog()">Gjem deg og lat som om du ikke så dem</button>
  `

  
  updateView()
}

function buddyDialog() {
  let rng = null;
    rng = Math.floor(Math.random() * 2)  //0 er feil svar, 1 er riktig
    console.log(rng)
    if (rng === 0 && coolMeter >= 80){
      message = `Vennen din virker imponert. De hilser tilbake og 
      sier "${highCoolDialogs[Math.floor(Math.random() * highCoolDialogs.length)]}"`
      coolMeter += 20;
    } else if (rng === 0 && coolMeter < 80){
      message = `Vennen din hilser tilbake, men det virker ikke som om de er 
      spesielt imponert over bilen din. De sier "${lowCoolDialogs[Math.floor(Math.random() * lowCoolDialogs.length)]}"`
      coolMeter += 10;
    } else if (rng === 1){
      message = `${wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)]}"`
    }
  updateView()
}