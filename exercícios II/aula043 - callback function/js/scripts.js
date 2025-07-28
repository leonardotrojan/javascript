function exibir(num) {
    console.log("a operação resultou em: " + num);
}

function soma(a, b, cb) {
    var op = a + b;
    cb(op);
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir);
multiplicacao(2, 4, exibir);

/* basicamente esse argumento "exibir" colocado quando as functions foram invocadas serve para invocar a function exibir, que pega o Number resultante das operações (op) e concatena no console.log. Por isso que tanto faz o nome do parâmetro para a callback (seja callback ou cb) porque ambas vão representar o argumento "exibir", que por sua vez invoca a function "exibir". */

function exibir(num) {
    console.log("O resultado é: " + num)
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, callback) {
    var op = a * b;
    callback(op);
}

soma(2, 2, exibir);
multiplicacao(2, 4, exibir);