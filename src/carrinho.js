document.addEventListener("DOMContentLoaded", () => {
  renderizarItensCarrinho();
});

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function renderizarItensCarrinho() {
  const carrinhoContainer = document.getElementById("itens-carrinho");

  carrinhoContainer.innerHTML = "";

  if (carrinho.length === 0) {
    carrinhoContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
    return;
  }

  for (const produto of carrinho) {
    const cartaoProduto = `<div class="card-produto-simples">
        <img src="./assets/imgs/${produto.img}.jpg" alt="${produto.nome}">
        <div>
          <h1>${produto.nome}</h1>  
          <h2>R$${produto.preco},00</h2>
          <p>${produto.desc}</p>
        </div>
      </div>`;

    carrinhoContainer.innerHTML += cartaoProduto;
  }
}

const botaoHeader = document.getElementById("home");

botaoHeader.addEventListener("click", () => {
  window.location.href = "./index.html";
});

function abrirMenu() {
  document.getElementById("menu").classList.add("right-0");
  document.getElementById("menu").classList.remove("right-360");
  document.getElementById("overlay").style.display = "block";
}

function fecharMenu() {
  document.getElementById("menu").classList.add("right-360");
  document.getElementById("menu").classList.remove("right-0");
  document.getElementById("overlay").style.display = "none";
}

const overlay = document.getElementById("overlay");

window.addEventListener("click", (event) => {
  if (event.target == overlay) {
    overlay.style.display = "none";
    fecharMenu();
  }
});

const totalCompra = document.getElementById("total");
const valorCompra = carrinho.length * 45;

function alterarTotal() {
  totalCompra.innerText = "Total: R$" + valorCompra + ",00";
}

alterarTotal();

function finalizarCompra() {
  alert("Finalizando Compra!");
}

function mudarPosicaoRodape() {
  if (carrinho.length == 1) {
    document.getElementById("footer").classList.add("absolute");
  } else {
    return;
  }
}

mudarPosicaoRodape();
