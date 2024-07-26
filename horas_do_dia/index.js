function carregar() { 
    var texto = window.document.getElementById("texto");
    var foto = window.document.getElementById("foto");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    texto.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        foto.src = 'foto-manha.jpg'
        document.body.style.background = '#0082DA'
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'foto-tarde.jpg'
        document.body.style.background = '#F25C05'
    } else {
        foto.src = 'foto-noite.jpg'
        document.body.style.background = '#2B558C'
    }
}