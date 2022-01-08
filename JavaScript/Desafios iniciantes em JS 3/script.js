/*Desafio
Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.*/

let lines = gets().split('\n')

let N = parseInt(lines.shift());

let X = parseInt(lines.shift());

//complete o código

for (X = 0; X <= N; X++){
  if (X % 2 == 1)

  print(X);
}
