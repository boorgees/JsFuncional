// ANONYMOUS FUNCTION - SEM NOME

(function (a, b, c) { // por entre parenteses para não gerar erro
    return a + b + c  // pode fazer qlq coisa

})

// FUNCTION EXPRESSION


const sum = function (a, b) {  // function expressession a partir 
    return a + b              // de uma função anonima                       
}                              // por ela em uma variavel

const result  = sum(12, 12)
console.log(result)

const anotherSum = sum
console.log(anotherSum(12, 12))

let x = 3
console.log(x)

x = sum
console.log(x(12, 12))  
/* é possivel por uma função como valor de uma variavel */
