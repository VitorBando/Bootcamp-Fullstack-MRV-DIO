function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item){
    return    item % 2 === 0;
    }

function filtraFrutas(arr) {
    return arr.filter(callbackf)
}

function callbackf(item) {
    return item === 'maca'
}

const arrayFrutas = ['maca', 'laranja', 'uva', 'maca-verde', 'laranja-podre', 'uva-verde']

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtraPares(meuArray));

console.log(filtraFrutas(arrayFrutas));
