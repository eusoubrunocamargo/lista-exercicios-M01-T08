function distancia(pos_A, pos_B) {
    if (pos_A >= pos_B) {
        console.log(`A distância é de ${pos_A - pos_B}km`)
    } else {
        console.log(`A distância é de ${pos_B - pos_A}km`)
    }
}

distancia(5, 100);