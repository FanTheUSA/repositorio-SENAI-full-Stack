// Criando o objeto produto
let produto = {
    nome: "Teclado",
    preco: 120,
    estoque: 10,
    disponivel: true
};

// Exibindo os dados antes da alteração
console.log("=== PRODUTO ANTES DA VENDA ===");
console.log("Produto:", produto.nome);
console.log("Preço: R$", produto.preco);
console.log("Estoque:", produto.estoque);
console.log("Disponível:", produto.disponivel);

// Alterando os dados
produto.preco = 99.90;
produto.estoque = 9;

// Se o estoque acabar, o produto fica indisponível
if (produto.estoque === 0) {
    produto.disponivel = false;
}

// Exibindo os dados atualizados
console.log("\n=== PRODUTO APÓS ALTERAÇÃO ===");
console.log("Produto:", produto.nome);
console.log("Novo preço: R$", produto.preco);
console.log("Novo estoque:", produto.estoque);
console.log("Disponível:", produto.disponivel);

// 1) A propriedade que guarda o nome do produto é "nome".
// 2) A propriedade alterada para representar o desconto foi "preco".
// 3) A propriedade alterada para representar a venda foi "estoque".