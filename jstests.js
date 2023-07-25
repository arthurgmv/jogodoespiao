function startSpyGame() {
    // Perguntas
    var primeironome = prompt("Qual o seu primeiro nome? ");
    var ultimonome = prompt("Qual o seu último nome? ");
    var idade = prompt("Qual a sua idade? ");
    var altura = prompt("Qual a sua altura em cm? ");

 // Booleans
var nome = null;
var idadecond = null;
var alturacond = null;

// Lógica

if (primeironome[0] === ultimonome[0]) {
    nome = true;
} else {
    nome = false;
}

if (idade >= 30 && idade <= 40) {
    idadecond = true;
} else {
    idadecond = false;
}

if (altura >= 170) {
    alturacond = true;
} else {
    alturacond = false;
}

// Resultado
if (nome && idadecond && alturacond) {
    alert("Você é o espião!");
} else {
    alert("Nada a declarar.");
}
}


window.addEventListener('load', function() {
    // Obter referência ao botão pelo ID
    var startButton = document.getElementById('startButton');

    // Adicionar o evento de clique ao botão
    startButton.addEventListener('click', startSpyGame);
});


/* Regras: a pessoa que tiver o primeiro nome e o último nome com a mesma letra, assim como uma altura 
superior à 170cm e a idade entre 30 e 40 anos é o espião, se a pessoa não se enquadrar ela não é a espiã */