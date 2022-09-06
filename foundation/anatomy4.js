// ANONYMOUS FUNCTION


// IIFE - EXPRESSAO DE FUNCAO IMEDIATAMENTE INVOCADA
(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3); // PRECISA SER INVOCADA LOGO APÓS, EM ESCOPOS RESTRITOS

/* COMO UMA FUNÇÃO ANONIMA NÃO TEM COMO SER INVOCADA
USA-SE O IIFE PARA INVOCAR A FUNÇÃO LOGO APÓS SER 
EXPRESSA, E ENTÃO ELA SERÁ INVOCADA */

(function (a, b, c) { // A FUNCAO DEFINE UM ESCOPO DAS VARIAVEIS
    let x = 4
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);