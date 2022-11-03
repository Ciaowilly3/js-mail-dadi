const dadoCpu = Math.floor( Math.random() *6 + 1 );
const dadoUser = Math.floor( Math.random() *6 + 1 );

if (dadoCpu>dadoUser){
    alert(`Dispiace user, il computer ha vinto. Tu hai fatto ${dadoUser} mentre lui ${dadoCpu}!`);
}else{
    alert(`Complimenti user, hai vinto. Tu hai fatto ${dadoUser} mentre lui ${dadoCpu}!`);
}
