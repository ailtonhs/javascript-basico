function carregar() {
    const hora = new Date().getHours();
    let res = document.getElementById("res");

    let img = document.getElementById("imagem");

    res.innerHTML = `Agora são exatamente ${hora} horas`;

    let saudacao = document.getElementById("saudacao")

    if (hora >= 0 && hora < 12) {
        saudacao.innerHTML = "Bom Dia!";
        img.src = "img/manha.jpg";
        document.body.style.backgroundColor = "#EFE1D8";

    } else if (hora <= 18) {
        saudacao.innerHTML = "Boa Tarde!";
        img.src = "img/tarde.jpg";
        document.body.style.backgroundColor = "#EECD62";
    } else {
        saudacao.innerHTML = "Boa Noite!"
        img.src = "img/noite.jpg";
        document.body.style.backgroundColor = "#6196C0";
    }
}
