// RANGE FUNCTION

// RANGE (5)
function range1(end) {   // DECLARAÇÃO E PARAMETRO
    var ans = [];        // VARIAVEL QUE ARMAZENA E EXPRESSAO O RESULTADO
    for (let i = 1; i <= end; i++) {  // CRIAÇÃO DO ARRAY
        ans.push(i);                  // ACRESCIMO DE VALOR
    }
    return ans;                       // RETORNO DO VALOR ACRESCIDO DA VARIAVEL
}

console.log(range1(5))

// RANGE(6, 11)
function range2(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

console.log(range2(6, 11))

// RANGE(10, 19, de 2 em 2)
function range3(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i++);
    }
    return ans;
}

console.log(range3(10, 19))

// RANGE(6,2) decrescimo
function range4(start, end) {
    var ans = [];
    for (let i = start; i != (end - 1); i--) {
        ans.push(i);
    }
    return ans;
}

console.log(range4(6, 2))

// RANGE (8, -3, 4)
function range5(a, b, s = 1) {  // ESSA SERVE PARA TODOS
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)
    var ans = [];
    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
        ans.push(i);
    }
    return ans
}

console.log(range5(8, -3, 4))