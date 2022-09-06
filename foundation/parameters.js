function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5) //QUANDO TEM MAIS PARAMETROS, É IGNORADO E EXECUTA A FUNÇÃO
logParams(1, 2, 3)
logParams(1, 2) // MENOS PARAMETROS EXECUTA, MAS GERA UNDEFINED
logParams(1)
logParams()

function defaultParams(a = 4, b = 2, c = 0) { //PODE TER VALOR PADRÃO NO PARAMETRO
    console.log(a, b, c)
}

defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)
defaultParams()

//SPREAD/REST - FUNCAO COM QUANTIDADE VARIAVEL DE PARAMETROS
function logNums(...nums) { // PARA UM NUMERO INDEFINIDO DE PARAMETROS
    for (let n of nums) { // TORNA-SE UM ARRAY
        console.log(n)
    }
}

logNums([1, 2, 3, 4, 5, 6])

function sumAll(...nums) { // PASSAR PARAMETROS VARIADO E TRATAR COMO ARRAY
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3))