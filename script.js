let textoHistoria = document.getElementById("texto-historia");
let imagemHistoria = document.getElementById("imagem-historia");

function escolherIrAproximar() {
    textoHistoria.innerHTML = "Você se aproxima de Clara. Ela sorri mais ainda e te entrega algo nas mãos. 'Este é o começo do seu sonho', ela diz com uma voz suave.";
    imagemHistoria.src = "clara-sorrindo.jpg"; // Imagem de Clara sorrindo
    atualizarOpcoes("Perguntar o que significa", "Agradecer e sair", "aproximar");
}

function escolherFicarLonge() {
    textoHistoria.innerHTML = "Você decide ficar observando Clara de longe. Ela parece estar esperando por algo, mas não parece perceber sua presença.";
    imagemHistoria.src = "clara-sozinha.jpg"; // Clara sozinha no jardim
    atualizarOpcoes("Aproximar-se agora", "Sair do jardim", "longe");
}

function atualizarOpcoes(opcao1, opcao2, caminho) {
    let opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = `
        <button onclick="prosseguir('${caminho}', '1')">${opcao1}</button>
        <button onclick="voltar()">Voltar</button>
    `;
}

function prosseguir(caminho, escolha) {
    if (caminho === "aproximar" && escolha === "1") {
        textoHistoria.innerHTML = "Você pergunta o significado do que Clara te entregou. Ela olha nos seus olhos e responde: 'É o segredo do seu verdadeiro desejo'.";
        imagemHistoria.src = "clara-segredo.jpg"; // Imagem de Clara revelando o segredo
        atualizarOpcoes("Perguntar mais sobre o segredo", "Sair do jardim", "aproximar");
    } else if (caminho === "longe" && escolha === "1") {
        textoHistoria.innerHTML = "Você decide aproximar-se de Clara. Ela parece feliz com sua escolha. 'Você finalmente entendeu, não é?'";
        imagemHistoria.src = "clara-entendendo.jpg"; // Imagem de Clara com expressão de compreensão
        atualizarOpcoes("Agradecer", "Sair do jardim", "aproximar");
    }
}

function voltar() {
    textoHistoria.innerHTML = "Você está de volta ao jardim. Clara está lá, esperando por você com um sorriso no rosto.";
    imagemHistoria.src = "jardim-florido.jpg"; // Volta à imagem inicial
    document.getElementById("opcoes").innerHTML = `
        <button onclick="escolherIrAproximar()">Aproximar-se de Clara</button>
        <button onclick="escolherFicarLonge()">Ficar distante e observar</button>
    `;
}
