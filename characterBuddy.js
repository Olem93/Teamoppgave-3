// characterBuddy.js

let highCoolDialogs = [
  "A: oi sjekk den fete bilen!",
  "B: damn my boy!",
  "C: takk bro" 
];

let lowCoolDialogs = [
   "A: Halla", 
   "B: yo...",
   "C: den er grei"
];

let venner = [
  "Lars Monsen",
  "Rebecka",
  "Geir",
  "Eskil",
  "Terje",
  "Jens",
  "Peer Gynt",
  "Henrik Ibsen",
  "Michael Jackson",
  "Obama"
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
    if (rng === 1 && coolMeter >= 80){
      message = `Vennen din virker imponert. De hilser tilbake og 
      sier "${highCoolDialogs[Math.floor(Math.random() * highCoolDialogs.length)]}"`
      coolMeter += 20;
    } else if (rng === 1 && coolMeter < 80){
      message = `Vennen din hilser tilbake, men det virker ikke som om de er 
      spesielt imponert over bilen din. De sier "${lowCoolDialogs[Math.floor(Math.random() * lowCoolDialogs.length)]}"`
      coolMeter += 10;
    } else if (rng === 0){
      message = `${wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)]}"`
      coolMeter -= 10
    }
  updateView()
}

