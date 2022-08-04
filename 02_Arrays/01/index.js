/*
Crie uma função que recebe dois parâmetros:
- `lista`: um array numérico com números que variam de 0 a 10 (podem ser números decimais);
- `propriedade`: uma variável numérica.

Essa função deve retornar:
- A soma dos elementos do array caso `propriedade` seja 1;
- A quantidade de números 3 que existem no array caso `propriedade` seja 2;
- A quantidade de números entre 6 e 10 que existem no array caso `propriedade` seja 3;
- O maior número do array caso `propriedade` seja 4;
- O menor número do array caso `propriedade` seja 5;
- O tamanho do array caso seja 6. */
let lista = [1, 2, 3, 3, 5, 6, 7, 8, 9, 10];
function op(lista, prop) {
    switch (prop) {
        case 1:
            let soma = 0;
            for (let item of lista) {
                soma += item;
            }
            return console.log(soma);
        case 2:
            let num3 = 0;
            for (let item of lista) {
                if (item === 3) {
                    num3 += 1;
                }
            }
            return console.log(num3);
        case 3:
            let num = 0;
            for (let item of lista) {
                if (item >= 6 && item <= 10) {
                    num += 1;
                }
            }
            return console.log(num);
        case 4:
            let maior = lista[0];
            for (let item of lista) {
                if (item > maior) {
                    maior = item;
                }
            }
            return console.log(maior);
        case 5:
            let menor = lista[0];
            for (let item of lista) {
                if (item < menor) {
                    menor = item;
                }
            }
            return console.log(menor);
        case 6:
            return console.log(lista.length);
        default:
            return console.log("Inválido");
    }
}

op(lista, 1);