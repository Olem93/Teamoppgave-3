let coolMeter = 20;

updateView();
function updateView() {
  html = /*HTML*/ `
        <h1>test</h1>
        <div>Kul-o-meter😎🔥: ${coolMeter}</div>
        <section id="item-grid">${spawnItems()}</section>
    `;

  document.getElementById("appOppgave3").innerHTML = html;
}

function spawnItems() {
  let html = "";
  for (let i = 0; i < 16; i++) {
    boxTest = Math.floor(Math.random() * 16);
    itemTest = Math.floor(Math.random() * items.length);
    console.log(itemTest);
    if (boxTest > 4) {
      html += /*HTML*/ `<div class="rute"></div>`;
    } else {
      html += /*HTML*/ `<div style="cursor: pointer" class="rute" onclick="takeItem()">${items[itemTest].Item}</div>`;
    }
  }

  return html;
}

function takeItem() {}


