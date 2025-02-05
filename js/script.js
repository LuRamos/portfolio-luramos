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






//Slider

// Variáveis para controlar o índice da imagem atual e a lista de imagens
let currentSlide = 0; // A imagem inicial será a primeira (índice 0)
const images = document.querySelectorAll(".sobre-slider-slide img"); // Seleciona todas as imagens do slider
const totalSlides = images.length; // Obtém o número total de imagens no slider

// Botões para navegação no slider
const prevButton = document.querySelector(".slider-prev"); // Seleciona o botão "anterior"
const nextButton = document.querySelector(".slider-next"); // Seleciona o botão "próximo"
const sliderImages = document.querySelector(".sobre-slider-slide"); // Seleciona o contêiner das imagens do slider

// Função para exibir a imagem correspondente ao índice fornecido
function showSlide(index) {
  // Se o índice for menor que 0, vai para a última imagem
  if (index < 0) {
    currentSlide = totalSlides - 1; // Vai para a última imagem
  } else if (index >= totalSlides) {
    currentSlide = 0; // Vai para a primeira imagem
  }

  // Desloca o contêiner das imagens para exibir a imagem atual, com base no índice
  sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`; // Move as imagens horizontalmente
}

// Adiciona o evento de clique no botão "anterior"
prevButton.addEventListener("click", () => {
  currentSlide--; // Decrementa o índice para ir para a imagem anterior
  showSlide(currentSlide); // Atualiza o slider para mostrar a nova imagem
});

// Adiciona o evento de clique no botão "próximo"
nextButton.addEventListener("click", () => {
  currentSlide++; // Incrementa o índice para ir para a próxima imagem
  showSlide(currentSlide); // Atualiza o slider para mostrar a nova imagem
});

// Exibe a primeira imagem assim que a página for carregada
showSlide(currentSlide);
