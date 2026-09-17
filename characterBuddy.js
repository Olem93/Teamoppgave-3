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

function buddyDialog(coolPoints) {
  if (coolPoints > 50) {
    return highCoolDialogs;
  }

  if (coolPoints < 50) {
    return lowCoolDialogs;
  }
}