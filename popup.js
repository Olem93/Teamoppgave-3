function showPopup(message){

    let popup = document.getElementById('popup');
    let popupMessage = document.getElementById('popupMessage');

    popup.style.display = "block"

    popupMessage.innerHTML = message;
}

function closePopup(){
    document.getElementById('popup').style.display = "none";
}