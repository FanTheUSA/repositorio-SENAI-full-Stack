const produtos = [
  {
    id: 1,
    nome: "Caneca",
    preco: 25,
    categoria: "Casa"
  },
  {
    id: 2,
    nome: "Mochila",
    preco: 120,
    categoria: "Acessórios"
  },
  {
    id: 3,
    nome: "Fone",
    preco: 90,
    categoria: "Eletrônicos"
  }
];

// Arrow function + destructuring
const formatar = ({ nome, preco, categoria }) => {
  return `${nome} - R$ ${preco.toFixed(2)} - ${categoria}`;
};

// Elemento onde os produtos serão colocados
const container = document.getElementById("lista");

// Função que mostra os produtos na tela
function renderizar(lista) {
  container.innerHTML = "";

  lista.forEach(produto => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.textContent = formatar(produto);

    // Botão de favorito ao clicar no card
    card.addEventListener("click", () => {
      card.classList.toggle("favorito");
    });

    container.appendChild(card);
  });
}

// Mostrar todos os produtos
renderizar(produtos);

// Filtrar produtos abaixo de R$ 100
const baratos = produtos.filter(produto => produto.preco < 100);

// Botão para mostrar produtos baratos
document.getElementById("mostrarBaratos").addEventListener("click", () => {
  renderizar(baratos);
});

// Botão para mostrar todos os produtos
document.getElementById("mostrarTodos").addEventListener("click", () => {
  renderizar(produtos);
});

// Exemplo de spread
const promo = {
  ...produtos[0],
  preco: 19.90
};

console.log("Produto original:", produtos[0]);
console.log("Produto em promoção:", promo);

// Exemplo de JSON
const produtosJSON = JSON.stringify(produtos);

console.log("JSON:", produtosJSON);

const produtosConvertidos = JSON.parse(produtosJSON);

console.log("Objeto novamente:", produtosConvertidos);
