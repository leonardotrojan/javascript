var novoParagrafo = document.createElement("p");
var texto = document.createTextNode("Este é o conteúdo do parágrafo")

novoParagrafo.appendChild(texto);

var body = document.querySelector("body");
body.appendChild(novoParagrafo);


var container = document.getElementById("container");
console.log(container)

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto do span"));;

console.log(el);

container.appendChild(el);