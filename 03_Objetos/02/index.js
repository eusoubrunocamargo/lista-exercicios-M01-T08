let jogos = [
    {
        timeA: 5,
        timeB: 4
    },
    {
        timeA: 3,
        timeB: 3
    },
    {
        timeA: 2,
        timeB: 1
    },
    {
        timeA: 1,
        timeB: 3
    },
    {
        timeA: 2,
        timeB: 5
    },
    {
        timeA: 0,
        timeB: 1
    }
];

function vencedor(jogos) {

    let vitoriasTimeA = 0;
    let vitoriasTimeB = 0;

    for (let item of jogos) {

        if (item.timeA > item.timeB) {
            vitoriasTimeA += 1;
        }
        if (item.timeB > item.timeA) {
            vitoriasTimeB += 1;
        }
    }

    if (vitoriasTimeA > vitoriasTimeB) {
        console.log("Time A venceu mais vezes");
    } else if (vitoriasTimeB > vitoriasTimeA) {
        console.log("Time B venceu mais vezes");
    } else {
        console.log("Empate");
    }
}

vencedor(jogos);