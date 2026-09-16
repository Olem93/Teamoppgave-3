updateView()
function updateView(){
    html = /*HTML*/ `
        <h1>test</h1>

        <section id="item-grid">${spawnItems()}</section>
    `
    
    
    
    
    
    
    
    
    
    document.getElementById('appOppgave3').innerHTML = html

}

function spawnItems(){
    let items = "";
    for (let i = 0; i < 16; i++)
        if (){
            items += /*HTML*/ `<div class="rute"></div>`
        }

        

    return items
}