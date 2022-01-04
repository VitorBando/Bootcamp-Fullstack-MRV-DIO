function multiplicaPorDois(arr){
    let multiplicados = [];
    for(let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i]*2);
    }
    return multiplicados
}

const meusNumeros = [2, 33, 456, 356, 40];

console.log(multiplicaPorDois(meusNumeros));

function forInExemplo(obj) {
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

console.log(forInExemplo(meuObjeto));

function logLetras(palavra) {
    for(letra of palavra){
        console.log(letra);
    }   
}

const palavra = "abacaxi";

console.log(logLetras(palavra));

function logNumeros(nums) {
    for(num1 of nums){
        console.log(num1);
    }
}

const nums = [30, 20, 233, 2];

console.log(logLetras(nums));



function exemploWhile() {
    let num = 0

    while (num <= 5) {
        console.log(num);
        num++;
    }
}

console.log(exemploWhile());

function exemploDoWhile() {
    let num2 = 6

    do{
        console.log(num2);
        num2++;
    }
    while (num2 <= 5) {
}
}

console.log(exemploDoWhile());