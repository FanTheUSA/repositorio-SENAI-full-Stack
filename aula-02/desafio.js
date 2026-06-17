// Dados do aluno
let nome = "João";
let nota1 = 8;
let nota2 = 7;
let frequencia = 80;
let atividadesEntregues = true;
let estaBloqueado = false;

// Cálculo da média
let media = (nota1 + nota2) / 2;

// Verificação da situação
let situacao;

if (estaBloqueado) {
    situacao = "Reprovado";
} else if (media >= 9 && frequencia >= 60) {
    situacao = "Aprovado por destaque";
} else if (media >= 6 && frequencia >= 75 && atividadesEntregues === true) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

// Exibição dos resultados
console.log("Nome:", nome);
console.log("Média:", media.toFixed(2));
console.log("Frequência:", frequencia + "%");
console.log("Entregou as atividades?", atividadesEntregues);
console.log("Situação final:", situacao);