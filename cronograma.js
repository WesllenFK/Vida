const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const materias = {
    fevereiro: {
        1: "literatura", 2: "quimica", 3: "redacao", 4: "biologia", 5: "fisica", 6: "filosofia",
        7: "matematica", 8: "literatura", 9: "quimica", 10: "biologia", 11: "geografia",
        12: "artes", 13: "fisica", 14: "quimica", 15: "ingles", 16: "biologia", 17: "historia",
        18: "matematica", 19: "literatura", 20: "quimica", 21: "geografia", 22: "redacao",
        23: "biologia", 24: "filosofia", 25: "matematica", 26: "quimica", 27: "portugues",
        28: "fisica"
    },
    // Adicione aqui os outros meses com suas respectivas matérias
};

let mesAtual = 1; // Começa em fevereiro (índice 1 no array)

document.querySelector(".prev-month").addEventListener("click", () => mudarMes(-1));
document.querySelector(".next-month").addEventListener("click", () => mudarMes(1));

function mudarMes(direcao) {
    mesAtual += direcao;
    if (mesAtual < 0) mesAtual = 11; // Se voltar antes de janeiro, vai para dezembro
    if (mesAtual > 11) mesAtual = 0; // Se passar de dezembro, volta para janeiro

    atualizarCalendario();
}

function atualizarCalendario() {
    const tituloMes = document.querySelector(".calendar-header h2");
    tituloMes.textContent = meses[mesAtual];

    const tbody = document.querySelector(".calendar-table tbody");
    tbody.innerHTML = ""; // Limpa a tabela

    let primeiroDiaSemana = new Date(2024, mesAtual, 1).getDay(); // Descobre o primeiro dia do mês
    let totalDias = new Date(2024, mesAtual + 1, 0).getDate(); // Descobre quantos dias tem o mês

    let novaLinha = "<tr>";
    for (let i = 0; i < primeiroDiaSemana; i++) {
        novaLinha += "<td></td>"; // Espaços vazios antes do primeiro dia
    }

    for (let dia = 1; dia <= totalDias; dia++) {
        let classe = materias[meses[mesAtual].toLowerCase()]?.[dia] || "";
        novaLinha += `<td class="${classe}">${dia}</td>`;

        if ((primeiroDiaSemana + dia) % 7 === 0) { // Quebra de linha a cada domingo
            novaLinha += "</tr><tr>";
        }
    }

    novaLinha += "</tr>";
    tbody.innerHTML = novaLinha;
}

// Inicializa o calendário ao carregar a página
atualizarCalendario();
