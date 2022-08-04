let treinos = [false, true, true, true,
    false,
    true, true,
    false,
    true, true, true, true, true,
    true, true, true, true, true];
let rendimentoEsperado = 80;

function rendimento(treinos, rendimentoEsperado) {
    let totalTreinos = treinos.length;
    let diasDeTreino = 0;
    for (let item of treinos) {
        if (item === true) {
            diasDeTreino += 1;
        }
    }
    let meuRendimento = (diasDeTreino / totalTreinos) * 100;
    console.log(`Rendimento: ${Math.floor(meuRendimento)}%`);

    function verificar(meuRendimento) {
        if (meuRendimento >= rendimentoEsperado) {
            console.log("Desempenho satisfatório");
        } else {
            console.log("Você não atingiu suas metas");
        }
    }

    function diasConsecutivos(treinos) {
        let dias = [];
        let sequencia = 1;
        for (let i = 0; i < treinos.length; i++) {
            if (treinos[i] === true && treinos[i + 1] === true) {
                sequencia += 1;
            } else if (treinos[i] === true && (treinos[i + 1] === false || treinos[i + 1] === undefined)) {
                dias.push(sequencia);
                sequencia = 1;
            }
        }
        let maior = dias[0];
        for (let item of dias) {
            if (item > dias[0]) {
                maior = item;
            }
        }
        console.log(`Sua maior sequência é de ${maior} dias!`);
    }
    return diasConsecutivos(treinos) + verificar(meuRendimento);
}

rendimento(treinos, rendimentoEsperado);