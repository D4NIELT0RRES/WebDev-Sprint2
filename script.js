const lista = document.getElementById("listaAnotacoes");
const btn = document.getElementById("btnCapturar");
let anotacoes = [];
btn.addEventListener("click", () => {
  const titulo = prompt("Nome da anotação:");
  if (titulo) {
    const nova = {
      titulo: titulo,
      categoria: "Matemática"
    };
    anotacoes.push(nova);
    renderizar();
  }
});
function renderizar() {
  lista.innerHTML = "";
  anotacoes.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3>${item.titulo}</h3>
      <p>${item.categoria}</p>
    `;
    lista.appendChild(div);
  });
}
const busca = document.getElementById("busca");
busca.addEventListener("input", () => {
  const valor = busca.value.toLowerCase();
  const filtrado = anotacoes.filter(item =>
    item.titulo.toLowerCase().includes(valor)
  );
  lista.innerHTML = "";
  filtrado.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = <h3>${item.titulo}</h3>;
    lista.appendChild(div);
  });
});
