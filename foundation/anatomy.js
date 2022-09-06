// FUNCTION DECLARATION

function sayHello() {  // definindo a função
    console.log("Hello") // não recebe parametro e não retorna nada
}

let x = sayHello() // invocando a função
console.log(x) // não mostra nada pq não foi posto retorno

// ----------------------------------

function sayHelloTo(name) {  // não retorna, mas recebe parametro
    console.log("Hello " + name) // concatenando

}

sayHelloTo("Mike")

//----------------------------------

function returnHi() {  // nao recebe parametro e retorna valor
    return "Hi!"
}

let greeting = returnHi()
console.log(greeting)

// ------------------------------------

function returnHiTo(name) {  // recebe parametro e retorna algo
    return `Hi ${name}`
}

console.log(returnHiTo("john"))