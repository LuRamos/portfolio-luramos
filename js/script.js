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


// Seleciona o elemento com o ID 'copiarEmail' e adiciona um evento de clique
document.getElementById('copiarEmail').addEventListener('click', function(event) {
    
    // Impede o comportamento padrão do link (evita que a página recarregue)
    event.preventDefault();

    // Define a variável 'email' com o endereço de e-mail a ser copiado
    const email = 'luanaramosdsantos@gmail.com';

    // Usa a API do navegador para copiar o texto (neste caso, o e-mail) para a área de transferência
    navigator.clipboard.writeText(email).then(function() {
        
        // Seleciona o elemento do alerta pelo ID 'alerta-copiado'
        let alerta = document.getElementById("alerta-copiado");
        
        // Exibe o alerta definindo o estilo 'display' como 'block'
        alerta.style.display = "block";
        
        // Define um temporizador para esconder o alerta após 3 segundos (3000 milissegundos)
        setTimeout(() => {
            alerta.style.display = "none";
        }, 3000);
    });
});
