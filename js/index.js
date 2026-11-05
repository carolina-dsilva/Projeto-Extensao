
const dataAtual = document.getElementById("dataAtual");

const hoje = new Date();

dataAtual.textContent = hoje.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});

const inputImagem = document.getElementById("imagem");
const preview = document.getElementById("preview");
const previewContainer = document.getElementById("preview-container");
const removerImagem = document.getElementById("removerImagem");

inputImagem.addEventListener("change", function () {

    const arquivo = this.files[0];

    if (!arquivo) {
        return;
    }

    if (arquivo.size > 5 * 1024 * 1024) {
        alert("A imagem deve ter no máximo 5MB.");
        this.value = "";
        return;
    }

    const leitor = new FileReader();

    leitor.onload = function (evento) {
        preview.src = evento.target.result;
        previewContainer.style.display = "flex";
    };

    leitor.readAsDataURL(arquivo);

});


removerImagem.addEventListener("click", function () {

    inputImagem.value = "";
    preview.src = "";
    previewContainer.style.display = "none";

});


const formProduto = document.getElementById("formProduto");

formProduto.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const marca = document.getElementById("marca").value;
    const categoria = document.getElementById("categoria").value;
    const fragrancia = document.getElementById("fragrancia").value;
    const tamanho = document.getElementById("tamanho").value;
    const quantidade = document.getElementById("quantidade").value;

    alert(
        "Produto preenchido com sucesso!\n\n" +
        "Nome: " + nome + "\n" +
        "Marca: " + marca + "\n" +
        "Categoria: " + categoria + "\n" +
        "Fragrância: " + fragrancia + "\n" +
        "Tamanho: " + tamanho + "\n" +
        "Quantidade: " + quantidade
    );

});
