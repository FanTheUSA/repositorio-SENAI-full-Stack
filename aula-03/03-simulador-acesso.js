let valorCompra = 180;
let temCupom = true;
let formaPagamento = "pix";

if (valorCompra >= 150 && temCupom && formaPagamento === "pix") {
    console.log("Aplicar desconto do cupom e desconto adicional do PIX.");
}