//Função em JS é First-Class object (Citizens)
//Higher-order function


//criar de forma literal
function fun1() {}

//Armazenar em uma cariável
const fun2 = function() {}

// Armazenar em um Arrey
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'opa' }
console.log(obj.falar())