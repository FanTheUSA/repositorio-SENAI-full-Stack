function calcularDesconto(preco: number, percentual: number): number {
    let valorFinal = preco - (preco * percentual / 100);
    return valorFinal;
}

console.log(calcularDesconto(100, 10)); // 90
console.log(calcularDesconto(250, 20)); // 200
console.log(calcularDesconto(80, 15));  // 68