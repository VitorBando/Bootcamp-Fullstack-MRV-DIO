// tipos primitivos

// booleean

var vOuF = false;
console.log(typeof(vOuF));

// numer
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = "Vitor";
console.log(typeof(nome));

//como declarar

var variavel = 'Vitor';
variavel = 'Bando';
console.log(variavel)

let variavel2 = 'vitor';
variavel2= 'bando'
console.log(variavel2);

const constante = 'vitor';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log (escopoLocalInterno);
}

escopoLocal();

// atribuição
var atribuicao = 'vitor';


// comparação
var comparacao = '0' == 0;
console.log(comparacao);


// comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);


var adicao = 1+1;
console.log(adicao);

var subtracao = 2-1;
console.log(subtracao);

var multiplicacao = 2 * 3;
console.log(multiplicacao);

var divisaoReal = 6 / 2;
console.log(divisaoReal);

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

var potenciacao = 2 ** 10;
console.log(potenciacao);

var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
console.log(menorQue);

var maiorOuIgualA = 5 >= 2;
console.log(maiorOuIgualA);

var menorOuIgualA = 5 <= 2;
console.log(menorOuIgualA);



var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = ! true;
console.log(nao);