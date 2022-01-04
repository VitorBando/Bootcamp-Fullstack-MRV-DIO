function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maioQueDez = num > 10;

    if (ehNegativo) {
        return "Esse número é negativo!";
    }else if (!ehNegativo && maioQueDez){
        return "Esse número é positivo e maior que 10!"
    }

    return "Esse número é positivo!";
}

console.log(numeroPositivo(11));

function getAnimal(id) {
    switch (id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
                 
            default:"peixe";
    }
    
}

console.log(getAnimal(3));