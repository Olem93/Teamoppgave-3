let kontrollsjanse = 30;

let bortforklaring;
let stikkeAv;

function policeControl(){
    if(rngMathRandom() >= kontrollsjanse){
        return "Du kjører forbi politikontrollen uten å bli vinket inn.";
    }
    else{
        return "Du blir vinket inn til kontrollen."
    }
}


function rngMathRandom(){
    return Math.floor(Math.random()*100);
}