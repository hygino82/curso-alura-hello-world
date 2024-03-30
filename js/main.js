let nome = '';
let nomeUsuario = document.getElementById('nome-usuario');

while (nome == '') {
    nome = prompt('Qual o seu nome?');
}

if (nome == null) {
    nomeUsuario.textContent = 'seja muito bem vindo.';
}
else {
    nomeUsuario.textContent = nome;
}
