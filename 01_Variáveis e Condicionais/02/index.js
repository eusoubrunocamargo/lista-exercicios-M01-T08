let quantidadeDeTelha = 120;
let capacidadeTruck = 30;

function viagens(telhas, capacidade) {
    let numViagens = telhas / capacidade;
    if (telhas % capacidade === 0) {
        console.log(`Você fará ${numViagens} viagens`);
    } else {
        console.log(`Você fará ${Math.floor((numViagens + 1))} viagens`)
    }
}

viagens(21, 4);