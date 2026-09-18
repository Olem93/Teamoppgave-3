// characterBuddy.js

let highCoolDialogs = [
  "Oi, sjekk den fete bilen!",
  "Damn, my boy!",
  "Takk, bro!" 
];

let lowCoolDialogs = [
   "Halla", 
   "Yo...",
   "Den er grei.."
];

let venner = [
  "Lars Monsen",
  "Rebecka",
  "Geir",
  "Eskil",
  "Terje",
  "Peer Gynt",
  "Henrik Ibsen",
  "Michael Jackson",
  "Obama"
]

function meetBuddy(){
  message = /*HTML*/ `Du møter en venn. Det er ${venner[Math.floor(Math.random() * venner.length)]}!
  Hva sier du?
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
  let rng = Math.floor(Math.random() * 3)  //0 er feil svar, 1 og 2 er riktig
    if (rng === 1 || rng === 2 && coolMeter >= 150){
      message = `Vennen din virker imponert. De hilser og 
      sier "${highCoolDialogs[Math.floor(Math.random() * highCoolDialogs.length)]}"`
      coolMeter += 20;
    } else if (rng === 1 || rng === 2 && coolMeter < 150){
      message = `Vennen ser deg og hilser, men det virker ikke som om de er 
      spesielt imponert over bilen din. De sier "${lowCoolDialogs[Math.floor(Math.random() * lowCoolDialogs.length)]}"`
      coolMeter += 10;
    } else if (rng === 0){
      message = "Vennen din later som om de ikke ser deg... Det var flaut😥 Du kjenner du blir mindre kul allerede..."
      coolMeter -= 10
    }
  updateView()
}

