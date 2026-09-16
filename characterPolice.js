let player = {
    valg
}

let kontrollsjanse = 30;

let bortforklaring;
let stikkeAv;
let resultat = "";

//Sjanse for å bli vinket inn til kontroll.

function policeControl(){
    if(rngMathRandom() >= kontrollsjanse){
        return "Du kjører forbi politikontrollen uten å bli vinket inn.";
    }
    else{
        resultat = "Du blir vinket inn til kontrollen."
        politiOppdagelse();
    }
}

//Hva oppdager politiet?

function politiOppdagelse(){
    let oppdagelse = 100;
    if(oppdagelse < 30){
        resultat = "Politiet luker rev";
    }
    else if(oppdagelse < 60){
        resultat = "Politiet merker at du er bereust på alkohol";
    }
    else{
        resultat = "Politiet finner ingenting mistenkelig, og du får kjøre videre."
    }
}

function politiValg(){

}
//RNG funksjon
function rngMathRandom(){
    return Math.floor(Math.random()*100);
}