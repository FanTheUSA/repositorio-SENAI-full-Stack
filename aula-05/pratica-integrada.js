// Sistema simples da turma

// Arrays com os dados dos alunos
let nomes = ["João", "Maria", "Pedro", "Julia", "Lucas"];
let notas = [8.5, 6.0, 4.5, 7.2, 9.0];
let frequencias = [90, 80, 70, 85, 95];

// Opção do menu
// 1 = Listar alunos
// 2 = Média geral
// 3 = Situação dos alunos
// 4 = Resumo da turma
let opcao = 4;

// Variáveis acumuladoras
let somaNotas = 0;
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

// Soma todas as notas
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

// Calcula a média geral
let mediaGeral = somaNotas / notas.length;

// Menu principal
switch (opcao) {

    case 1:
        console.log("=== LISTA DE ALUNOS ===");

        for (let i = 0; i < nomes.length; i++) {
            console.log(
                "Posição: " + i +
                " | Nome: " + nomes[i] +
                " | Nota: " + notas[i] +
                " | Frequência: " + frequencias[i] + "%"
            );
        }
        break;

    case 2:
        console.log("=== MÉDIA GERAL DA TURMA ===");
        console.log("Média da turma: " + mediaGeral.toFixed(2));
        break;

    case 3:
        console.log("=== SITUAÇÃO DOS ALUNOS ===");

        for (let i = 0; i < nomes.length; i++) {

            if (notas[i] >= 7 && frequencias[i] >= 75) {
                console.log(nomes[i] + " - Aprovado");
            } else if (notas[i] >= 5 && notas[i] < 7 && frequencias[i] >= 75) {
                console.log(nomes[i] + " - Recuperação");
            } else {
                console.log(nomes[i] + " - Reprovado");
            }
        }
        break;

    case 4:
        console.log("=== RESUMO DA TURMA ===");

        for (let i = 0; i < nomes.length; i++) {

            if (notas[i] >= 7 && frequencias[i] >= 75) {
                aprovados++;
            } else if (notas[i] >= 5 && notas[i] < 7 && frequencias[i] >= 75) {
                recuperacao++;
            } else {
                reprovados++;
            }
        }

        console.log("Quantidade de alunos: " + nomes.length);
        console.log("Média geral: " + mediaGeral.toFixed(2));
        console.log("Aprovados: " + aprovados);
        console.log("Recuperação: " + recuperacao);
        console.log("Reprovados: " + reprovados);

        break;

    default:
        console.log("Opção inválida!");
}