let myArray = [];

function resposta (mensagen) {
    document.getElementById("res").innerHTML = mensagen;
};

const addIni = document.getElementsByTagName("button")[0];
addIni.addEventListener("click", adicionarInicio => {
    const item = document.getElementById("item").value.trim();

    if (item) {
        myArray.unshift(item);
        resposta(`<p>"${item}" Adicionado no inicio array.</p>`)
    } else {
        alert("[ERRO] Digite um item para adicionar!")
    }

    document.getElementById("item").value = "";
});

const addFinal = document.getElementsByTagName("button")[1];
addFinal.addEventListener("click", adicionarFinal => {
    const item = document.getElementById("item").value.trim();

    if (item) {
        myArray.push(item);
        resposta(`<p>"${item}" Adicionado no final do array.</p>`)
    } else {
        alert("[ERRO] Digite um item para adicionar!")
    };

    document.getElementById("item").value = "";
});

const remInicio = document.getElementsByTagName("button")[2];
remInicio.addEventListener("click", removerDoInicio => {

    if (myArray.length > 0) {
       const remove = myArray.shift();
        resposta(`<p>"${remove}" Removido do inicio do array.</p>`)
    } else {
        alert("[ERRO] Não há item para remover!")
    };
});

const remFinal = document.getElementsByTagName("button")[3];

remFinal.addEventListener("click", removerDoFinal => {
    if (myArray.length > 0) {
        const remove = myArray.pop();
        resposta(`<p>"${remove}" Removido do final do array.</p>`)
    } else {
        alert("[ERRO] Não há item para ser removido!")
    };
});

const veriIndice = document.getElementsByTagName("button")[4];

veriIndice.addEventListener("click", verificarIndice => {
    const item = document.getElementById("item").value.trim();

    if (item) {
        const index = myArray.indexOf(item);
        if (index !== -1) {
            resposta(`<p>O índice de "${item}" é ${index}.</p>`)
        } else {
            resposta(`<p>"${item}" Não encotrado no array.</p>`)
        };
        
    } else {
        alert("[ERRO] Digite algo para remover!")
    };

    document.getElementById("item").value = ""

});

const mostrarArray = document.getElementsByTagName("button")[5];

mostrarArray.addEventListener("click", dispalyArray => {
    if (myArray.length > 0) {
        resposta(`<p>O array atual é [${myArray.join(", ")}].</p>`)
    } else {
        alert("[ERRO] O array está vazio!")
    }
})