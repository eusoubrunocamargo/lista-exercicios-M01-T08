/*
Escreva uma função chamada `calculadora` que recebe três parâmetros:
- `num1`: do tipo numérico;
- `num2`: do tipo numérico;
- `operacao`: do tipo númerico.

Sua função deverá retornar:
- A soma de `num1` e `num2` caso `operacao` seja 1;
- A subtração de `num1` e `num2` caso `operacao` seja 2;
- A multiplicação de `num1` e `num2` caso `operacao` seja 3;
- A divisão de `num1` e `num2` caso `operacao` seja 4;
- O resto da divisão entre `num1` e `num2` caso `operacao` seja 5.
*/

function calculadora(num1, num2, op) {
    switch (op) {
        case 1:
            return console.log(num1 + num2);
        case 2:
            return console.log(num1 - num2);
        case 3:
            return console.log(num1 * num2);
        case 4:
            return console.log(num1 / num2);
        case 5:
            return console.log(num1 % num2);
        default:
            return console.log("Operação inválida");
    }
}

calculadora(10, 2, 1)
calculadora(10, 2, 2)
calculadora(10, 2, 3)
calculadora(10, 2, 4)
calculadora(10, 2, 5)