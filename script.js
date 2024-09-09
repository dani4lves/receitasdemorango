document.addEventListener('DOMContentLoaded', function() {
    const passos = document.querySelectorAll('.Passo');
    const botoes = document.querySelectorAll('.btn-proximo');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const proximoPassoId = this.getAttribute('data-proximo');
            const passoAtualId = `Passo-${proximoPassoId}`;

            // Ocultar todos os passos
            passos.forEach(passo => {
                passo.style.display = 'none';
            });

            // Mostrar o passo selecionado
            const passoAtual = document.getElementById(passoAtualId);
            if (passoAtual) {
                passoAtual.style.display = 'block';
            }

            // Alterar o texto do botão "Voltar" para "okk tchau!" no Passo 2
            if (proximoPassoId === '0') {
                const passoZero = document.getElementById('Passo-0');
                const textoParagrafo = passoZero.querySelector('p');
                if (textoParagrafo) {
                    textoParagrafo.textContent = 'okk tchau!';
                }
            }
        });
    });

    // Mostrar o primeiro passo inicialmente
    document.getElementById('Passo-0').style.display = 'block';
});
