var teste = 5;

console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: "Leonardo",
    idade: 15,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    dizerNome: function() {
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function () {
        this.idade += 1;
    }
};


pessoa.dizerNome();

pessoa.aniversario();