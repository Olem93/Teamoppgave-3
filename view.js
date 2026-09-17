
updateView();
function updateView() {
  html = /*HTML*/ `
        <h1>test</h1>
        <div>Kul-o-meter😎🔥: ${coolMeter}</div>
        <div>Antall ekorn påkjørt: ${numberSquirrelKill}</div>
        <section id="item-grid">${spawnItems()}</section>
        <button onclick="setRandomEncounter()">Ekkort Test</button>
        <div>${message}</div>
    `;

  document.getElementById("appOppgave3").innerHTML = html;
}

function spawnItems() {
  let html = "";
  for (let i = 0; i < 16; i++) {
    boxTest = Math.floor(Math.random() * 16);
    itemNum = Math.floor(Math.random() * items.length);
    if (boxTest > 4) {
      html += /*HTML*/ `<div class="rute"></div>`;
    } else {
      html += /*HTML*/ `<div style="cursor: pointer" class="rute" onclick="takeItem(items[${itemNum}])">${items[itemNum].Item}</div>`;
    }
  }

  return html;
}

