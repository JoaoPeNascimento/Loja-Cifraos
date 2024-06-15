const catalogo = [
  {
    id: "1",
    nome: "Camisa La ursa",
    preco: 45,
    img: "produto-1",
    desc: "Com referência a cultura do estado de Pernambuco e uma estampa simples traz elementos que remetem a figura folclórica do Brasil.",
  },
  {
    id: "2",
    nome: "Camisa Poison",
    preco: 45,
    img: "produto-2",
    desc: "Com referências a cultura grega a camisa Poison traz a Medusa como uma figura imponente lhe dando estilo e personalidade.",
  },
  {
    id: "3",
    nome: "Camisa Cartoon",
    preco: 45,
    img: "produto-3",
    desc: "Alegre e divertida essa camisa traz personagens de desenhos animados, a estampa nos da um toque de humer, leveza e nostalgia.",
  },
  {
    id: "4",
    nome: "Camisa Mystic",
    preco: 45,
    img: "produto-4",
    desc: "Com um ar de mistérios e espiritualidade as estampas nos mostra elementos além do nosso mundo, perfeito para que gosta de mistérios",
  },
  {
    id: "5",
    nome: "Camisa Hunter Hype",
    preco: 45,
    img: "produto-5",
    desc: "Com referência a cultura geek a estampa possui elementos mais joviais com animes e simbolos para a nova geração.",
  },
  {
    id: "6",
    nome: "Camisa Fantasy",
    preco: 45,
    img: "produto-6",
    desc: "Com estampas vibrantes e imaginativas, a Fantasy busca trazer nosso lado mais criativo.",
  },
];

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

function renderrizarProdutos() {
  for (const produto of catalogo) {
    const cartaoProduto = `<div class="card-produto" id="card-produto${produto.id}">
    <img src="./assets/imgs/${produto.img}.jpg" alt="Produto ${produto.id}.">
    <a href="">${produto.nome}</a>
    <p>R$${produto.preco},00</p>
    <div>
      <button id="adicionar-${produto.id}"><i class="fa-solid fa-cart-plus"></i></button>
      <span id="${produto.id}" class="verde" style="margin-left: 10px;"><i class="fa-solid fa-circle-check"></i></span>
    </div>
</div>`;

    document.getElementById("produtos").innerHTML += cartaoProduto;
  }

  for (const produto of catalogo) {
    document
      .getElementById(`adicionar-${produto.id}`)
      .addEventListener("click", () => addAoCarrinho(produto.id));
  }
}

renderrizarProdutos();

const botaoHeader = document.getElementById("user");

botaoHeader.addEventListener("click", () => {
  window.location.href = "./user.html";
});

function addAoCarrinho(produtoId) {
  const produto = catalogo.find((p) => p.id === produtoId);
  if (produto) {
    carrinho.push({
      nome: produto.nome,
      preco: produto.preco,
      img: produto.img,
      desc: produto.desc,
    });
    console.log("Produto adicionado ao carrinho:", produto);
    console.log("Carrinho atual:", carrinho);
    salvarCarrinhoLocalStorage();
    marcarChecado(produto.id);
  }
}

function salvarCarrinhoLocalStorage() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

let carrinho = [];

function marcarChecado(produtoId) {
  document.getElementById(produtoId).classList.remove("verde");
}
