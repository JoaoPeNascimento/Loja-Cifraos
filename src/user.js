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

const botaoHeader = document.getElementById("home");

botaoHeader.addEventListener("click", () => {
  window.location.href = "./index.html";
});

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
  document.getElementById("ibge").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("uf").value = conteudo.uf;
    document.getElementById("ibge").value = conteudo.ibge;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("uf").value = "...";
      document.getElementById("ibge").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}

// Função para verificar e exibir o nome salvo no localStorage ao carregar a página
window.onload = function () {
  let nomeSalvo = localStorage.getItem("nome");
  if (nomeSalvo) {
    document.getElementById("nome-usuario").innerText =
      "Olá, " + nomeSalvo + "!";
  }
};

// Adiciona um event listener ao botão de login
document.getElementById("btn-login").addEventListener("click", function () {
  let nome = document.getElementById("nome").value;
  if (nome == "") {
    alert("Preencha todos os campos!!!");
  } else {
    document.getElementById("nome-usuario").innerText = "Olá, " + nome + "!";
    localStorage.setItem("nome", nome);
  }
});
