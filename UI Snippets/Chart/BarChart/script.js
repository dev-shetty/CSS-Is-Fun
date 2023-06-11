const barChart = document.getElementById("bar-chart")

new Chart(barChart, {
  type: "bar",
  data: {
    labels: ["JavaScript", "TypeScript", "CSS", "Python", "C", "Java"],
    datasets: [
      {
        label: "Like Rating",
        data: [7, 8, 10, 7, 5, 2],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scale: {
      y: {
        min: 1,
        max: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "How much do I like these languages?",
        align: "center",
      },
    },
  },
})
