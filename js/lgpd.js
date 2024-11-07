var msgCookies = document.getElementById('cookies-msg')

// Função para aceitar todos os cookies


//RECUSAR
function recusar(){
    localStorage.lgpd ="nao"
    msgCookies.classList.remove('mostrar')
}
if(localStorage.lgpd  == 'nao'){
    msgCookies.classList.remove('mostrar')

}else{
    msgCookies.classList.add('mostrar')
}

//ACEITAR
function aceito(){
    localStorage.lgpd ="sim"
    msgCookies.classList.remove('mostrar')
}
if(localStorage.lgpd  == 'sim'){
    msgCookies.classList.remove('mostrar')

}else{
    msgCookies.classList.add('mostrar')
}
