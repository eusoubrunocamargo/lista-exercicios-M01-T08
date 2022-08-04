let marcadas = ["A", "B", "B", "D", "A", "C"];
let gabarito = ["B", "B", "C", "D", "A", "C"];

function nota(marcadas, gabarito) {
    let nota = 0;
    for (let i = 0; i < marcadas.length; i++) {
        for (let j = i; j <= i; j++) {
            if (marcadas[i] === gabarito[j]) {
                nota += 1;
            } else {
                nota -= 1;
            }
        }
    }
    return console.log(nota);
}


nota(marcadas, gabarito);