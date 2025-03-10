ocument.addEventListener("DOMContentLoaded", function () {
    // Configuração dos dados para o gráfico de faturamento diário
    const dailyRevenueCtx = document.getElementById("dailyRevenueChart").getContext("2d");
    new Chart(dailyRevenueCtx, {
        type: "bar",
        data: {
            labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
            datasets: [{
                label: "Faturamento Diário ($)",
                data: [120, 190, 300, 500, 200, 300, 450],
                backgroundColor: "#f39c12",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Configuração dos dados para o gráfico de faturamento mensal
    const monthlyRevenueCtx = document.getElementById("monthlyRevenueChart").getContext("2d");
    new Chart(monthlyRevenueCtx, {
        type: "line",
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [{
                label: "Faturamento Mensal ($)",
                data: [3200, 2800, 4000, 5000, 7000, 6500, 8000, 7500, 8200, 9000, 9500, 11000],
                backgroundColor: "rgba(41, 128, 185, 0.5)",
                borderColor: "#2980b9",
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});