const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Mapeamento das matérias por mês
const materias = {
    janeiro: { 5: "matematica", 10: "fisica", 15: "quimica" },
    fevereiro: { 1: "literatura", 2: "quimica", 3: "redacao", 4: "biologia", 5: "fisica", 6: "filosofia",
        7: "matematica", 8: "literatura", 9: "quimica", 10: "biologia", 11: "geografia",
        12: "artes", 13: "fisica", 14: "quimica", 15: "ingles", 16: "biologia", 17: "historia",
        18: "matematica", 19: "literatura", 20: "quimica", 21: "geografia", 22: "redacao",
        23: "biologia", 24: "filosofia", 25: "matematica", 26: "quimica", 27: "portugues",
        28: "fisica"
    },
    marco: { 3: "redacao", 7: "biologia", 12: "historia", 20: "matematica" },
    // Adicione as matérias para os outros meses
};

let mesAtual = 1; // Começa em fevereiro

document.querySelector(".prev-month").addEventListener("click", () => mudarMes(-1));
document.querySelector(".next-month").addEventListener("click", () => mudarMes(1));

function mudarMes(direcao) {
    mesAtual += direcao;
    if (mesAtual < 0) mesAtual = 11;
    if (mesAtual > 11) mesAtual = 0;
    atualizarCalendario();
}

function atualizarCalendario() {
    const tituloMes = document.querySelector(".calendar-header h2");
    tituloMes.textContent = meses[mesAtual];

    const tbody = document.querySelector(".calendar-table tbody");
    tbody.innerHTML = ""; // Limpa a tabela

    let primeiroDiaSemana = new Date(2024, mesAtual, 1).getDay();
    let totalDias = new Date(2024, mesAtual + 1, 0).getDate();

    let novaLinha = "<tr>";
    for (let i = 0; i < primeiroDiaSemana; i++) {
        novaLinha += "<td></td>";
    }

    let nomeMes = meses[mesAtual].toLowerCase();
    let materiasMes = materias[nomeMes] || {};

    for (let dia = 1; dia <= totalDias; dia++) {
        let classe = materiasMes[dia] || "";
        novaLinha += `<td class="${classe}">${dia}</td>`;

        if ((primeiroDiaSemana + dia) % 7 === 0) {
            novaLinha += "</tr><tr>";
        }
    }

    novaLinha += "</tr>";
    tbody.innerHTML = novaLinha;
}

// Inicializa o calendário
atualizarCalendario();
