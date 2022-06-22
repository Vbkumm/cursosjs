function carregar() {
    var msg = window.document.querySelector("div#msg")
    var img = window.document.getElementById("imagem")
    var date = new Date()
    var hora = date.getHours()
        //var hora = 22
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "img/morningradial.png"
        document.body.style.background = "blue"
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = "img/afternoonradial.png"
        document.body.style.background = "green"
    } else {
        //Boa noite
        img.src = "img/nightradial.png"
        document.body.style.background = "black"
    }

}