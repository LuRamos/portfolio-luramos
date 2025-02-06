const cabecalho = document.querySelector("#cabecalho");

// Função para verificar o scroll do cabeçalho
function verificarScrollCabecalho() {
  console.log(window.scrollY); // Verifique o valor do scroll
  if (window.scrollY > 0) {
    cabecalho.classList.add("ativo"); // Adiciona a classe 'ativo' quando o scroll for maior que 0
  } else {
    cabecalho.classList.remove("ativo"); // Remove a classe 'ativo' quando o scroll for no topo
  }
}

// Variáveis
const menuMobile = document.getElementById("menu-mobile"); // Botão de menu hambúrguer
const menuLista = document.getElementById("cabecalho-menu-lista"); // Lista do menu

// Função para verificar o scroll do cabeçalho e do menu hambúrguer
function verificarScrollCabecalho() {
  const cabecalho = document.getElementById("cabecalho");

  if (window.scrollY > 0) {
    cabecalho.classList.add("ativo"); // Fixando o cabeçalho
  } else {
    cabecalho.classList.remove("ativo"); // Removendo a fixação
  }
}

// Adicionando os eventos de scroll
window.addEventListener("scroll", verificarScrollCabecalho);











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







  let currentSlide = 0;
  const images = document.querySelectorAll(".sobre-slider-imagem");
  const totalSlides = images.length;
  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");
  const sliderImages = document.querySelector(".sobre-slider-slide");
  
  // Define o número total de slides como uma variável CSS
  sliderImages.style.setProperty('--totalSlides', totalSlides);
  
  function showSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    }
  
    const offset = -currentSlide * 100;
    sliderImages.style.transform = `translateX(${offset}%)`;
  }
  
  prevButton.addEventListener("click", () => {
    currentSlide--;
    showSlide(currentSlide);
  });
  
  nextButton.addEventListener("click", () => {
    currentSlide++;
    showSlide(currentSlide);
  });
  
  showSlide(currentSlide);




document.addEventListener("DOMContentLoaded", () => {
  const menuMobile = document.querySelector("#menu-mobile");
  const menuLista = document.querySelector("#menu-lista");
  const linhas = document.querySelectorAll(".cabecalho-menu-mobile div");

  if (!menuMobile || !menuLista) {
    console.error("Erro: Elementos não encontrados.");
    return;
  }

  // Abrir/Fechar o menu
  menuMobile.addEventListener("click", () => {
    menuLista.classList.toggle("ativo"); // Mostra e esconde o menu
    linhas.forEach((linha) => linha.classList.toggle("ativa")); // Ativa/desativa a animação do hambúrguer
  });

  // Fecha o menu ao clicar em um item
  document.querySelectorAll(".cabecalho-menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuLista.classList.remove("ativo");
      linhas.forEach((linha) => linha.classList.remove("ativa"));
    });
  });
});
