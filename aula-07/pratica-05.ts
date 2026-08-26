// Criando o objeto produto

let produto = {
 nome: "Mouse",
 preco: 50,
 quantidade: 2,

 calcularTotal() {
    return this.preco * this.quantidade;
 }
};

// Exibindo o total
console.log("total:", produto.calcularTotal());

 