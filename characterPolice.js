let kontrollsjanse = 30;

let bortforklaring;
let stikkeAv;
let resultat = "";

//Sjanse for å bli vinket inn til kontroll.

function policeControl(){
    if(rngMathRandom() >= kontrollsjanse){
        return "Du kjører forbi politikontrollen. Du prøver å se så uskyldig ut at du nesten blir mistenkelig. 👀";
    }
    else{
        resultat = "🚨 Du blir vinket inn til kontrollen."
        return resultat + politiOppdagelse();
    }
}

//Hva oppdager politiet?

function politiOppdagelse(){

    let oppdagelse = rngMathRandom();

    if(oppdagelse < 30){
        resultat = "👮 Politimannen lener seg inn mot vinduet... og sier "Hm. Hva er den lukta?" Du later som du ikke hørte spørsmålet. 👀"
    }
    else if(oppdagelse < 60){
        resultat = "👮 Politimannen ser på deg. Så på øynene dine. Så på deg igjen. Har du drukket?";
    }
    else{
        resultat = "👮 Politimannen kikker inn i bilen. Han finner ingenting mistenkelig. Kjør forsiktig. Du nikker alvorlig og kjører av gårde som om ingenting har skjedd.";
    }
}

function politiValg(valg){
    if(valg === "bortforklare"){

    }
    else if (valg ==="stikkeAv"){

    }


}
//RNG funksjon
function rngMathRandom(){
    return Math.floor(Math.random()*100)+1;
}