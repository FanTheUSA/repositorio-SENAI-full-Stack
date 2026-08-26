class Aluno {
  constructor(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  calcularMedia() {
    return (this.nota1 + this.nota2) / 2;
  }

  verificarSituacao() {
    if (this.calcularMedia() >= 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }

  exibirInformacoes() {
    console.log("Nome:", this.nome);
    console.log("Média:", this.calcularMedia());
    console.log("Situação:", this.verificarSituacao());
    console.log("-------------------------");
  }
}

let aluno1 = new Aluno("Ana", 8, 7);
let aluno2 = new Aluno("Carlos", 5, 4);
let aluno3 = new Aluno("Mariana", 9, 6);

aluno1.exibirInformacoes();
aluno2.exibirInformacoes();
aluno3.exibirInformacoes();