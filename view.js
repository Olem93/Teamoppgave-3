updateView();
function updateView() {
  html = /*HTML*/ `
        <h1>test</h1>

        <section id="item-grid">${spawnItems()}</section>
    `;

  document.getElementById("appOppgave3").innerHTML = html;
}

<<<<<<< HEAD
function spawnItems() {
  let html = "";
  for (let i = 0; i < 16; i++) {
    boxTest = Math.floor(Math.random() * 16);
    itemTest = Math.floor(Math.random() * items.length);
    console.log(itemTest);
    if (boxTest > 4) {
      html += /*HTML*/ `<div class="rute"></div>`;
    } else {
      html += /*HTML*/ `<div style="cursor: pointer" class="rute" onclick="takeItem()">${items[itemTest]}</div>`;
=======
function spawnItems(){
    let html = "";
    for (let i = 0; i < 16; i++){
        boxTest = Math.floor(Math.random() * 16)
        itemTest = Math.floor(Math.random() * items.length)
        console.log(itemTest)
        if (boxTest > 4){
            html += /*HTML*/ `<div class="rute"></div>`
        } else {
            html += /*HTML*/ `<div style="cursor: pointer" class="rute" onclick="takeItem()">${items[itemTest].Item}</div>`
        }
>>>>>>> 2214bdbd8ca752343f232dd947e2c4f24e598d56
    }
  }

  return html;
}

function takeItem() {}
