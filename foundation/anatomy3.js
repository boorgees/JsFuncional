// ARROW FUNCTION

const increment1 = function (n) { //function expression
    return n + 1
}

// a função arrow sempre é anonima
const increment2 = (n) => {
    return n + 1
}


const increment3 = n => { // pode tirar os parenteses do parametro
    return n + 1
}

const increment4 = n => n + 1  // forma mais simplificada

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))

const sum = (a, b) => a + b

console.log(sum(3, 8))