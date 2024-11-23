function resultado(mensagem) {
    document.getElementById("res").innerHTML = mensagem;
}

const inputButton = document.getElementsByTagName("input")[3];

inputButton.addEventListener("click", verificar => {
    let inptutAno = document.getElementById("iano");

    let anoNascimento = Number(inptutAno.value);

    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;


    if (anoNascimento == "" || anoNascimento > anoAtual || anoNascimento < 1920) {
        //alert("[ERRO] Digite um valor valído!")
        alert("[ERRO] Digite um valor válido!")
    } else {
        let radsex = document.getElementsByName("radsex");

        let genero = "";
        let img = document.getElementsByTagName("img")[0];
       
        if (radsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade <= 12) {
                //resultado(`Idade calculada ${idade} ano`);
                img.src="img/menino.jpg";

            } else if (idade <= 21) {
                img.src="img/jovem-home.jpg";

            } else if (idade < 60) {
               img.src="img/homem-adulto.jpg";

            } else {
                img.src="img/homem-idoso.jpg"

            };



        } else {
            genero = "Mulher"
            if (idade >= 0 && idade <= 12) {
                img.src="img/menina.jpg";

            } else if (idade <= 21) {
                img.src="img/jovem-mulher.jpg"

            } else if (idade < 60) {

                img.src="img/mulher-adulta.jpg"
            } else {
                img.src="img/mulher-idosa.jpg"
            } 
        };


        resultado(`Detectamos ${genero} com ${idade} anos.`)
    };


    document.getElementById("iano").value = "";

});