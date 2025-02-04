// Seleção correta do cabeçalho pelo ID
const cabecalho = document.querySelector('#cabecalho');

function verificarScroll(){
    if(window.scrollY > 0){
        cabecalho.classList.add('ativo');// Adiciona a classe 'ativo' quando o scroll for maior que 0
    }else{
        cabecalho.classList.remove('ativo'); // Remove a classe 'ativo' quando o scroll for no topo
    }
}
// Adicionando o evento de scroll
window.addEventListener('scroll', verificarScroll);


function digitacao (elemento){
    const textoOriginal = elemento.innerHTML; // Pega o texto do elemento
    const textoArray = textoOriginal.innerHTML.split(''); // Divide o texto em um array de letras
    elemento.innerHTML = ''; // Limpa o texto do elemento
    textoArray.forEach(function(letra, i){ // Para cada letra do array
        setTimeout(function(){ // Adiciona um delay
            elemento.innerHTML += letra; // Adiciona a letra no elemento
        }, 75 * i); // Delay de 75ms por letra
    });
}
const titulo = document.querySelector('#apresentacao-conteudo-titulo');
digitacao(titulo); // Aplica a função de digitação no título




/* 
const texto = 'Olá, eu sou '; // Texto antes do <strong>
const destaque = 'Luana Ramos'; // Texto dentro do <strong>

function digitacao(elemento, texto) {
  const textoArray = texto.split('');
  let textoAtual = ''; // Variável para armazenar o texto que será adicionado

  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      textoAtual += letra; // Adiciona uma letra por vez
      elemento.textContent = textoAtual; // Atualiza o texto sem afetar o HTML ou estilo
    }, 75 * i); // Delay de 75ms por letra
  });
}

const h1 = document.querySelector('#apresentacao-conteudo-titulo');
const strong = document.querySelector('#apresentacao-titulo-destaque');

// Primeiro, vamos digitar o texto fora do <strong> (no h1)
digitacao(h1, texto);  // Digita o texto antes do <strong> normalmente

// Depois que o texto anterior for digitado, digita o conteúdo dentro do <strong>
setTimeout(function () {
  digitacao(strong, destaque); // Aplica digitação apenas no <strong>
}, 75 * texto.length); // Espera o tempo total de digitação do h1 (antes do <strong>)
 */