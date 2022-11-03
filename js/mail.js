const mailList = ["Musco@gmail.com", "John@libero.com", "Rob@gmail.com", "Luca@gmail.com"];
const userEmail = prompt("inserisci la tua mail:");
let accesso = false;
for (let i = 0; i<mailList.length; i++){
    if (userEmail === mailList[i]){
        accesso = true;
    }
}

if (accesso){
    alert("Hai diritto all'accesso, benvenuto.")
}else{
    alert("Non hai diritto all'accesso, dispiace.")
}