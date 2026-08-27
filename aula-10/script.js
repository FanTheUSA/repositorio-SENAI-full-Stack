const produtos = [
    {
        nome: "Notebook",
        preco: 3500,
        categoria: "Eletrônicos",
        imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },

    {
        nome: "Smartphone",
        preco: 2200,
        categoria: "Eletrônicos",
        imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        nome: "Camiseta",
        preco: 80,
        categoria: "Roupas",
        imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },

    {
        nome: "Tênis",
        preco: 250,
        categoria: "Calçados",
        imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        nome: "Mochila",
        preco: 150,
        categoria: "Acessórios",
        imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    }
];


// =====================================
// FUNÇÃO PARA LISTAR OS PRODUTOS
// =====================================

function listarProdutos(lista = produtos) {

    const catalogo = document.getElementById("catalogo");

    catalogo.innerHTML = "";

    lista.forEach(({ nome, preco, categoria, imagem }) => {

        catalogo.innerHTML += `
            <div class="card">

                <img src="${imagem}" alt="${nome}">

                <div class="card-content">

                    <h3>${nome}</h3>

                    <p class="preco">
                        R$ ${preco.toFixed(2)}
                    </p>

                    <span class="categoria">
                        ${categoria}
                    </span>

                </div>

            </div>
        `;
    });
}


// =====================================
// FUNÇÃO PARA FILTRAR
// =====================================

function filtrarProdutos() {

    const categoriaSelecionada =
        document.getElementById("categoria").value;

    if (categoriaSelecionada === "todos") {

        listarProdutos();

        return;
    }

    const produtosFiltrados = produtos.filter(
        ({ categoria }) =>
            categoria === categoriaSelecionada
    );

    listarProdutos(produtosFiltrados);
}


// =====================================
// SPREAD OPERATOR
// =====================================

// Criamos uma nova lista sem alterar a original
const copiaProdutos = [...produtos];


// Adicionando um novo produto na cópia
copiaProdutos.push({
    nome: "Fone de Ouvido",
    preco: 120,
    categoria: "Eletrônicos",
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
});


// =====================================
// INICIAR CATÁLOGO
// =====================================

listarProdutos();
