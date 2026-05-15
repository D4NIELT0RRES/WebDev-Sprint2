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
