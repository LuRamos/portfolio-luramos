const cabecalho = document.querySelector("#cabecalho");
const menuMobile = document.getElementById("menu-mobile"); // Botão hambúrguer
const menuLista = document.getElementById("menu-lista"); // Lista do menu

// Alterna a visibilidade do cabeçalho no scroll
function verificarScrollCabecalho() {
  if (window.scrollY > 0) {
    cabecalho.classList.add("ativo");
  } else {
    cabecalho.classList.remove("ativo");
  }
}

window.addEventListener("scroll", verificarScrollCabecalho);

// Alterna o menu e a animação do botão hambúrguer
menuMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("ativo"); // Anima as linhas do hambúrguer
  menuLista.classList.toggle("ativo"); // Mostra/esconde o menu lateral
});


// Fecha o menu ao rolar a página (apenas no mobile)
window.addEventListener("scroll", () => {
  if (window.innerWidth <= 768) { // Garante que só funciona no mobile
    if (menuLista.classList.contains("ativo")) {
      menuLista.classList.remove("ativo");
      menuMobile.classList.remove("ativo"); // Reseta a animação do botão hambúrguer
    }
  }
});









// Seleciona o elemento com o ID 'copiarEmail' e adiciona um evento de clique
document
  .getElementById("copiarEmail")
  .addEventListener("click", function (event) {
    // Impede o comportamento padrão do link (evita que a página recarregue)
    event.preventDefault();

    // Define a variável 'email' com o endereço de e-mail a ser copiado
    const email = "luanaramosdsantos@gmail.com";

    // Usa a API do navegador para copiar o texto (neste caso, o e-mail) para a área de transferência
    navigator.clipboard.writeText(email).then(function () {
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


  const images = document.querySelectorAll(".sobre-slider-imagem");
  const totalSlides = images.length;
  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");
  const sliderImages = document.querySelector(".sobre-slider-slide");
  
  let currentSlide = 0; // Define o índice inicial
  
  // Define o número total de slides como uma variável CSS
  sliderImages.style.setProperty('--totalSlides', totalSlides);
  
  // Função para mostrar o slide com base no índice
  function showSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    }
  
    const offset = -currentSlide * 100;
    sliderImages.style.transform = `translateX(${offset}%)`;
  }
  
  // Navegação do botão "anterior"
  prevButton.addEventListener("click", () => {
    currentSlide--;
    showSlide(currentSlide);
  });
  
  // Navegação do botão "próximo"
  nextButton.addEventListener("click", () => {
    currentSlide++;
    showSlide(currentSlide);
  });
  
  // Função para rotação automática
  function autoSlide() {
    currentSlide++;
    showSlide(currentSlide);
  }
  
  // Iniciar a rotação automática a cada 4 segundos
  const intervalID = setInterval(autoSlide, 4000);
  
  // Iniciar o slider mostrando o slide inicial
  showSlide(currentSlide);
  