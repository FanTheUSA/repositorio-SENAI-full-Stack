// Criando o array de alunos
let alunos = [
    { nome: "Ana", idade: 18, curso: "Full Stack" },
    { nome: "Carlos", idade: 22, curso: "Full Stack" },
    { nome: "Maria", idade: 20, curso: "Full Stack" }
];

// Exibindo os alunos com o for tradicional
console.log("=== LISTA COM FOR ===");

for (let i = 0; i < alunos.length; i++) {
    console.log("Aluno:", alunos[i].nome, "| Idade:", alunos[i].idade);
}

// Exibindo os alunos com o forEach
console.log("\n=== LISTA COM FOREACH ===");

alunos.forEach(function(aluno) {
    console.log(
        "Aluno:", aluno.nome,
        "| Idade:", aluno.idade,
        "| Curso:", aluno.curso
    );
});

// Alterando a idade do segundo aluno
alunos[1].idade = 23;

// Exibindo o aluno atualizado
console.log("\n=== APÓS ALTERAÇÃO ===");
console.log(alunos[1].nome + " agora tem " + alunos[1].idade + " anos.");