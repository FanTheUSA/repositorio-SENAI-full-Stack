function verificarMaioridade(idade: number): string {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarMaioridade(20)); // Maior de idade
console.log(verificarMaioridade(15)); // Menor de idade