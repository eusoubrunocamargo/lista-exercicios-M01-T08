let dados = [
    ["I", 6000, 8800, 5000, 2000, 9000, 24000, 800],
    ["A", 1550, 1800, 3000, 25000, 100000],
    ["J", 150, 10000, 9900, 1000000]
];

function dadosConsolidados(dados) {

    let arr = [];

    class Consolidado {
        constructor(faixa, media) {
            this.faixa = faixa;
            this.media = media;
        }
    }

    for (let element of dados) {
        for (let item of element) {

            let numSlice = element.slice(1);

            if (item === "A") {
                let total = numSlice.reduce(function (total, numero) {
                    return total + numero;
                }, 0);
                let faixa1 = new Consolidado("Adulto", (total / numSlice.length));
                arr.push(faixa1);
            }

            if (item === "I") {
                let total = numSlice.reduce(function (total, numero) {
                    return total + numero;
                }, 0);
                let faixa2 = new Consolidado("Idoso", (total / numSlice.length));
                arr.push(faixa2);
            }

            if (item === "J") {
                let total = numSlice.reduce(function (total, numero) {
                    return total + numero;
                }, 0);
                let faixa3 = new Consolidado("Jovem", (total / numSlice.length));
                arr.push(faixa3);
            }
        }
    }

    let maior = -Infinity;
    let grupo = "";
    for (let objeto of arr) {
        if (objeto.media > maior) {
            maior = objeto.media;
            grupo = objeto.faixa;
        }
    }

    console.log(`A maior média salarial é de R$${maior.toFixed(2)}
    e pertence ao grupo: ${grupo}`);

    console.table(arr);
}

dadosConsolidados(dados);







