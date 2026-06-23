let prioridade = 3;
let sistemaForaDoAr = true;
let tempoEspera = 50;

if (sistemaForaDoAr) {
    console.log("Sistema fora do ar. Atendimento indisponível.");
} else if (prioridade >= 3 || tempoEspera > 30) {
    console.log("Atendimento prioritário.");
}