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


//Copiar email

// Seleciona o elemento com o ID 'copiarEmail' e adiciona um evento de clique
document.getElementById('copiarEmail').addEventListener('click', function(event) {
    
    // Impede o comportamento padrão do link (evita que ele recarregue a página)
    event.preventDefault(); 

    // Define a variável 'email' com o endereço de e-mail a ser copiado
    const email = 'luanaramosdsantos@gmail.com'; 

    // Usa a API do navegador para copiar o texto (neste caso, o e-mail) para a área de transferência
    navigator.clipboard.writeText(email).then(
        
        // Se a cópia for bem-sucedida, exibe um alerta informando o sucesso
        function() {
            alert('Email copiado com sucesso!');
        }, 
        
        // Se houver um erro ao copiar, exibe um alerta informando a falha
        function() {
            alert('Erro ao copiar email!');
        }
    );
});
