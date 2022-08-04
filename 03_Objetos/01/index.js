let dados = [
    ["A", 1550, 1800, 3000, 25000],
    ["J", 6000, 8800, 5000, 2000, 9000, 24000, 800],
    ["I", 150, 10000, 9900, 14000, 18000]
];

function consolidar(dados) {

    let arr = [];

    class Objmodel {
        constructor(faixa, salarios, mediaSalarial, maiorSalario) {
            this.faixa = faixa,
                this.salarios = salarios,
                this.mediaSalarial = mediaSalarial,
                this.maiorSalario = maiorSalario
        }
    }

    for (let item of dados) {
        for (let itens of item) {
            if (itens === "A") {
                let faixaAdulto = new Objmodel(
                    "Adulto",
                    item.slice(1),
                    (item.slice(1).reduce(function (total, num) {
                        return total + num
                    }, 0)) / (item.slice(1).length),
                    item.slice(1).reduce(function (maior, num) {
                        return (num > maior) ? maior = num : maior;
                    }));
                arr.push(faixaAdulto);
            }
            if (itens === "J") {
                let faixaJovem = new Objmodel(
                    "Jovem",
                    item.slice(1),
                    (item.slice(1).reduce(function (total, num) {
                        return total + num
                    }, 0)) / (item.slice(1).length),
                    item.slice(1).reduce(function (maior, num) {
                        return (num > maior) ? maior = num : maior;
                    }));
                arr.push(faixaJovem);
            }
            if (itens === "I") {
                let faixaIdoso = new Objmodel(
                    "Idoso",
                    item.slice(1),
                    (item.slice(1).reduce(function (total, num) {
                        return total + num
                    }, 0)) / (item.slice(1).length),
                    item.slice(1).reduce(function (maior, num) {
                        return (num > maior) ? maior = num : maior;
                    }));
                arr.push(faixaIdoso);
            }
        }
    }
    console.table(arr);
}

consolidar(dados);
