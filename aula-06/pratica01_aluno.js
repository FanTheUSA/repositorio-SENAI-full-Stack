// Criando o objeto aluno
let aluno = {
    nome: "Gabriel",
    idade: 18,
    curso: "Programação Full Stack",
    matriculado: true,
    notaFinal: 7.5
};

// Exibindo os dados iniciais
console.log("=== CADASTRO DO ALUNO ===");
console.log("Nome:", aluno.nome);
console.log("Idade:", aluno.idade);
console.log("Curso:", aluno.curso);
console.log("Matriculado:", aluno.matriculado);
console.log("Nota final:", aluno.notaFinal);

// Atualizando os dados do aluno
aluno.idade = 19;
aluno.notaFinal = 8.5;
aluno.matriculado = false;

// Exibindo os dados atualizados
console.log("=== DADOS ATUALIZADOS ===");
console.log("Nome:", aluno.nome);
console.log("Nova idade:", aluno.idade);
console.log("Nova nota final:", aluno.notaFinal);
console.log("Matriculado:", aluno.matriculado);