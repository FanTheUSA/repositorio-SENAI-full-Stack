const produto1 = {
  nome: "Notebook",
  preco: 3000,
  categoria: "Eletrônicos",
  estoque: 10
};

const produto2 = {
  nome: "Tênis",
  preco: 250,
  categoria: "Calçados",
  estoque: 5
};

const produto3 = {
  nome: "Mochila",
  preco: 150,
  categoria: "Acessórios",
  estoque: 8
};

const produtos = [produto1, produto2, produto3];

function calcularDesconto(preco, percentual) {
  const desconto = preco * (percentual / 100);
  return preco - desconto;
}

function exibirProduto(produto) {
  console.log(`Nome: ${produto.nome}`);
  console.log(`Preço: R$ ${produto.preco}`);
  console.log(`Estoque: ${produto.estoque}`);
}

// Verificando se o primeiro produto está em promoção
const percentualDesconto = 10;

if (percentualDesconto > 0) {
  console.log(`${produto1.nome} está em promoção!`);
  console.log(`Preço com desconto: R$ ${calcularDesconto(produto1.preco, percentualDesconto)}`);
} else {
  console.log(`${produto1.nome} não está em promoção.`);
}

// Listando todos os produtos
for (let i = 0; i < produtos.length; i++) {
  console.log(`Produto ${i + 1}:`);
  exibirProduto(produtos[i]);
}







