/*
# Aplicando desconto

Crie uma função chamada `calcularDesconto` que recebe dois parâmetros:

- `valorCompra`: tipo numérico que indica o valor da compra feita pelo consumidor;
- `desconto`: tipo numérico que indica o desconto que o cliente vai receber.

Sua função deve retornar o valor a ser pago pelo cliente. */

function calcularDesconto(valorCompra, desconto) {
    let resultado = (valorCompra * (desconto / 100));
    console.log(valorCompra - resultado);
}

calcularDesconto(111, 13);