// ========================
// ELEMENTOS DO DOM
// ========================

const lista =
  document.getElementById("listaAnotacoes");

const btn =
  document.getElementById("btnCapturar");

const busca =
  document.getElementById("busca");

const totalFotos =
  document.getElementById("totalFotos");

const totalMaterias =
  document.getElementById("totalMaterias");

// ========================
// ARRAY DE ANOTAÇÕES
// ========================

let anotacoes = [];

// ========================
// CAPTURAR ANOTAÇÃO
// ========================

btn.addEventListener("click", () => {

  const titulo =
    prompt("Nome da anotação:");

  if (!titulo) return;

  const categoria =
    prompt("Digite a matéria:");

  if (!categoria) return;

  const nova = {
    titulo: titulo,
    categoria: categoria
  };

  anotacoes.push(nova);

  renderizar(anotacoes);

  atualizarDashboard();
});

// ========================
// RENDERIZAR
// ========================

function renderizar(listaAnotacoes) {

  lista.innerHTML = "";

  listaAnotacoes.forEach((item) => {

    // pega posição real do item
    const indiceReal =
      anotacoes.indexOf(item);

    const div =
      document.createElement("div");

    div.classList.add("card");

    div.innerHTML = `
      <h3>${item.titulo}</h3>
      <p>${item.categoria}</p>

      <button onclick="deletar(${indiceReal})">
        Excluir
      </button>
    `;

    lista.appendChild(div);
  });
}

// ========================
// DASHBOARD
// ========================

function atualizarDashboard() {

  totalFotos.textContent =
    anotacoes.length;

  const materiasUnicas = [
    ...new Set(
      anotacoes.map(
        item => item.categoria
      )
    )
  ];

  totalMaterias.textContent =
    materiasUnicas.length;
}

// ========================
// BUSCA
// ========================

busca.addEventListener("input", () => {

  const textoBusca =
    busca.value
      .toLowerCase()
      .trim();

  // mostra tudo se vazio
  if (textoBusca === "") {
    renderizar(anotacoes);
    return;
  }

  const filtrado =
    anotacoes.filter(item =>
      item.titulo
        .toLowerCase()
        .includes(textoBusca)
    );

  renderizar(filtrado);
});

// ========================
// LOGIN
// ========================

const form =
  document.getElementById("formLogin");

const erro =
  document.getElementById("erro");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const user =
    document.getElementById("user").value;

  const senha =
    document.getElementById("senha").value;

  if (
    user === "" ||
    senha.length < 4
  ) {

    erro.textContent =
      "Preencha corretamente!";

  } else {

    erro.textContent = "";

    alert(
      "Login efetuado com sucesso!"
    );
  }
});

// ========================
// SLIDESHOW
// ========================

let imagens = [
  "images/img1.png",
  "images/img2.png",
  "images/img3.png"
];

let index = 0;

function mostrar() {
  document.getElementById("slide").src = imagens[index];
}

function proximo() {
  index++;

  if (index >= imagens.length) {
    index = 0;
  }

  mostrar();
}

function anterior() {
  index--;

  if (index < 0) {
    index = imagens.length - 1;
  }

  mostrar();
}

// ========================
// DELETE
// ========================

function deletar(posicao) {

  const confirmacao =
    confirm(
      "Deseja deletar esta anotação?"
    );

  if (confirmacao) {

    anotacoes.splice(
      posicao,
      1
    );

    renderizar(anotacoes);

    atualizarDashboard();

    busca.value = "";
  }
}