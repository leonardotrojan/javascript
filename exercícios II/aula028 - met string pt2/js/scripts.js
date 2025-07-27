var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

var nome = "              Leonardo     ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

var fraseDois = "Eu quero a última palavra teste desse teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));