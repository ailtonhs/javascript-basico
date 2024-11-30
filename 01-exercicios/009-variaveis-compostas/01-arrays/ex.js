let num = [5, 8, 2, 9, 3];

//num[5] = 9; // adiciona no índice 5
num.push(1) // adiciona no final do array
num.sort();//ordena na ordem númerica

console.log(`O vetor tem ${num.length} elementos.`); //comprimento do vetor

console.log(`Nosso veter é o ${num}`);

let pos = num.indexOf(8);//retorna -1 caso a posição nao for encontrada


if (pos == -1) { 
    console.log("O valor não foi encontrado");
    
} else {
    console.log("O valor 8 está na posição " + pos);
    
}





