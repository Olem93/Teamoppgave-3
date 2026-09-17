function granmaTrigger() {
  if (rngMathRandom() >= granmaChance) {
    message = "Du ser en søt uskyldig bestemor.";
    choice = /*HTML*/ `
    <button onclick="granmaChoice('driveFast')">Du kjører fort forbi bestemoren.</button>
    <button onclick="granmaChoice('driveSlow')">Du senker farten for å ikke skremme henne.</button>
    `;

    message += choice;
    return message;
  }
}

function granmaChoice(choice) {
  if (choice === "driveFast") {
    message =
      "Du tråkker hardt på gassen, og begynner å gruse forbi bestemoren.";
    if (chance(40)) {
      message =
        "Du kjører fort forbi bestemor, hun synes bilen din er stilig og sprek.";
      coolMeter += 100;
    }
  } else {
    message =
      "Du kjører fort forbi bestemor og treffer en søledam. Bestemor blir søkkvåt og sinna.";
    coolMeter -= 100;
  }

  else if(choice === "driveSlow") {
    message =
      "Du senker farten, og glir sakte forbi i tretti mot bestemoren.";
    if (chance(10)) {
      message =
        "Bestemor blåser et kyss, og takker for at du viser hensyn.";
      coolMeter += 40;
    }
  } else {
    message =
      "Du kveler motoren. Bestemor ler av deg.";
    coolMeter -= 40;
  }
}

// Bestemor:
// Du kjører fort forbi:
// 40% sjanse for at du får mange kulhetspoeng (+XX cool)
// 40% sjanse for at du mister mange kulhetspoeng (-XX cool)
// F.eks. risiko om at bestemor angriper bilen
// 10% sjanse for at du får få kulhetspoeng (+X cool)
// 10% sjanse for at du mister få kulhetspoeng (-X cool)
// Du senker farten:
// 40% sjanse for at du får få kulhetspoeng (+X cool)
// 40% sjanse for at du mister få kulhetspoeng (-X cool)
// 10% sjanse for at du får mye kulhetspoeng (+XX cool)
// 10% sjanse for at du mister mye kulhetspoeng (-XX cool)
