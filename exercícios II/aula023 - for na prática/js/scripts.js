var lista = ['laranja', 'maçã', 'pera', 'jaca', 'limão'];

var listaUl = document.createElement('ul');
document.body.appendChild(listaUl);

for (var i = 0; i < lista.length; i++) {
    var li = document.createElement('li');
    li.textContent = lista[i];
    listaUl.appendChild(li);
}
