// js 

let cardImage = document.getElementById("cardImage"),
    user = document.getElementById("user"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    address = document.getElementById("address"),
    showNewUser = document.getElementById("showNewUser"),
    info = document.getElementById("info");

let cardIpi = new XMLHttpRequest();
cardIpi.open("GET", "./card.json");
cardIpi.send();

cardIpi.onload = function () {

    console.log(JSON.parse(cardIpi.responseText).links)
    console.log(cardIpi.responseText)
    console.log(JSON.stringify(cardIpi.responseText))

}


