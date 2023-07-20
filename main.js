// js 

const cardImage = document.getElementById("cardImage"),
    user = document.getElementById("user"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    address = document.getElementById("address"),
    showNewUser = document.getElementById("showNewUser"),
    info = document.getElementById("info"),
cardClick = document.querySelectorAll(".card_click button");
const sers = "https://randomuser.me/api/";
   let data = [];

function getUserData() {
    info.textContent = "loading......................"
    let cardIpi = new XMLHttpRequest();
    cardIpi.open("GET", sers);
    cardIpi.send();

    cardIpi.onload = function () {

        let newData = cardIpi.responseText;
        data = JSON.parse(newData).results[0]
        // console.log(data)
        console.log(data)
        cardImage.src = data.picture.large
        email.textContent = data.email
        user.textContent = data.name.first + " " + data.name.last
        info.textContent = ""
        

    }
}
getUserData() 


cardClick.forEach(function(item){
item.addEventListener("click", function(){
    if(this.dataset.info == "phone") {
        info.textContent = data.phone;
        info.style.color = "red"
    }else {
        info.textContent = " Country / " + data.location.country  + " || City / " + "" + data.location.city;
        info.style.color = "blue"
    }
})
})


showNewUser.addEventListener("click", getUserData )


