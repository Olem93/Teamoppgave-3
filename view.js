
updateView();
function updateView() {
  html = /*HTML*/ `
        <h1 class="counter">Cool car, bro</h1>
        <div class="counter">Kul-o-meter😎🔥: ${coolMeter}</div>
        <div class="counter" style="margin-bottom: 50px">Antall ekorn påkjørt: ${numberSquirrelKill}</div>
        <section id="item-grid">${spawnItems()}
          <div class="road">
            <div class="lane"></div></div>
        </section>

        <!--              POP UP VINDU                   -->
        <div>${showPopup()}</div>
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

function showPopup(){
    if (message === ""){
        return ""
    }
    let html = /*HTML*/ `
      <div id="popup">
        <h2 >${message}</h2>
            <div id="popupButtons">
              <button onclick="closePopup()" style="padding: 10px 20px;">
                OK
              </button>
            </div>
        </div>
    `
    return html
}

function closePopup(){
  message = "";
  updateView()
}