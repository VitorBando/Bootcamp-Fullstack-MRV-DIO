var jogador1 = 0;
var jogador2 = 1;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Jogadores inválidos');

// usando if
if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador1 marcou ponto');
        placar = jogador1 > jogador2;
    }

// usando else if
else if (jogador2 > 0 && jogador1 ==0){
        console.log('Jogador2 marcou ponto');
        jogador2 > jogador1;
    }

// usando else
else{
        console.log('Ninguem marcou ponto');
    }

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador1 ganhou');        
        break;

    case placar = jogador2 > jogador1:
        console.log('Jogador2 ganhou');
        break;
    default:
        console.log('Empate');
}*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }

// for executa uma instrução até que seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
    const element = array[indice];
    
}

for (let i in array ) {
    console.log(i);    
}

for (i in object){
    console.log(i);
}


for (i of array){
    console.log(i);
}

for (i of object.propriedade1){
    console.log(i);
}



var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

do {
    a++
    console.log(a);
}while (a < 10)


