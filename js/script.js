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

