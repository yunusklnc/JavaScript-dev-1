
let userName = prompt("Lütfen adınızı giriniz");

let myName = document.getElementById('myName');

myName.innerHTML = userName


function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');

    document.getElementById("myClock").innerHTML = date;
}

setInterval(tarihSaat, 1000); 



