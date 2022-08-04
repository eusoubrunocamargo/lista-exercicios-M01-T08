function temCopa(ano) {
    let anoInicial = 1930;
    if ((ano - anoInicial) % 4 === 0) {
        console.log("Tem COPA!")
    } else {
        console.log("Não tem copa ...")
    }
}

temCopa(2002);