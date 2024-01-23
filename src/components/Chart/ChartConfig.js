import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation"; // удалит ьесли ненужен
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  annotationPlugin,
  ChartDataLabels,
  Tooltip
);

function mobileChart(chartDate) {
  if (!chartDate) {
    return;
  }
  const labels = [...chartDate.factPagePerDay];

  const options = {
    responsive: true,
    layout: {
      padding: {
        right: 20,
        left: 10,
        top: 30,
      },
    },
    plugins: {
      filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    scales: {
      x: {
        grid: {
          drawTicks: false,
          offset: true,
          lineWidth: 1,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          lineWidth: 0,
          borderColor: "transparent",
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels,

    datasets: [
      {
        label: "ПЛАН",
        data: chartDate.planPages,

        datalabels: {
          display: function (context) {
            return context.dataIndex === context.dataset.data.length - 1;
          },
          align: "start",
          anchor: "start",
          offset: 5,
          backgroundColor: "#F5F7FA",
          boxShadow: "0px 2px 3px 0px rgba(9, 30, 63, 0.10)",
          fontFamily: "Monserrat",
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "38px",
          textTransform: "uppercase",
          borderRadius: 4,
          color: "#091E3F",
          font: {
            weight: "bold",
          },
          formatter: function (value, context) {
            return "ПЛАН";
          },

          clip: false, // Позволяет лейблам выходить за пределы графика
        },
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        borderWidth: 4,
        pointRadius: 4,
        borderColor: "#091E3F",
        backgroundColor: "#091E3F",
        tension: 0.4,
      },
      {
        label: "ФАКТ",
        data: chartDate.factPagePerDay.map((elem) => elem),
        datalabels: {
          display: function (context) {
            return context.dataIndex === context.dataset.data.length - 1;
          },
          align: "end",
          anchor: "end",
          backgroundColor: "#F5F7FA",
          borderRadius: 4,
          color: "#091E3F",
          font: {
            weight: "bold",
          },
          formatter: function (value, context) {
            return "ФАКТ";
          },
        },
        borderWidth: 4,
        pointRadius: 4,
        borderColor: "#FF6B08",
        backgroundColor: "#FF6B08",
        tension: 0.4,
      },
    ],
  };

  return (
    <Line type="line" width={227} height={190} options={options} data={data} />
  );
}

///////////////////////////////////////////////////

function desctopChart(chartDate, width) {
  if (!chartDate) {
    return;
  }
  const labels = [...chartDate.factPagePerDay];

  const options = {
    responsive: true,
    layout: {
      padding: {
        //   left: 40,
        right: 20,
        top: 10,
        // bottom: 0,
      },
    },
    elements: {
      point: {},
    },
    // indexAxis: "x",
    plugins: {
      // legend: {
      //   display: false,
      // },
      filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    scales: {
      // legend: {
      //   display: false,
      //   position: "bottom",
      // },

      x: {
        grid: {
          // drawOnChartArea: false,
          drawTicks: false,
          // tickBorderDash: [100],

          offset: false,
          lineWidth: 1,
          // color: "red",
          // tickLength: 30,
          // z: 11,
        },
        ticks: {
          display: false,
        },
      },

      y: {
        grid: {
          lineWidth: 0,
          borderColor: "transparent",
          // display: false,
        },
        ticks: {
          // stepSize: 1,

          display: false,
          // labelOffset: -15,
          // align: "end",
          // mirror: true,

          // padding: 0,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "ПЛАН",
        data: chartDate.planPages,
        datalabels: {
          display: function (context) {
            return context.dataIndex === context.dataset.data.length - 1;
          },
          align: "end",
          anchor: "end",
          backgroundColor: "#F5F7FA",
          boxShadow: "0px 2px 3px 0px rgba(9, 30, 63, 0.10)",
          fontFamily: "Monserrat",
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "38px",
          textTransform: "uppercase",
          borderRadius: 4,
          color: "#091E3F",
          font: {
            weight: "bold",
          },
          formatter: function (value, context) {
            return "ПЛАН";
          },
          clip: false, // Позволяет лейблам выходить за пределы графика
          // textAlign: "end",
          // textBaseline: "middle",
        },
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        borderWidth: 4,
        pointRadius: 4,
        borderColor: "#091E3F",
        backgroundColor: "#091E3F",
        tension: 0.4,
      },
      {
        label: "ФАКТ",
        data: chartDate.factPagePerDay.map((elem) => elem),
        datalabels: {
          display: function (context) {
            return context.dataIndex === context.dataset.data.length - 1;
          },
          align: "end",
          anchor: "end",
          backgroundColor: "#F5F7FA",
          borderRadius: 4,
          color: "#091E3F",
          font: {
            weight: "bold",
          },
          formatter: function (value, context) {
            return "ФАКТ";
          },
        },
        borderWidth: 4,
        pointRadius: 4,
        borderColor: "#FF6B08",
        backgroundColor: "#FF6B08",
        tension: 0.4,
      },
    ],
  };

  return (
    <Line
      type="line"
      width={607}
      height={width}
      options={options}
      data={data}
    />
    // <Line type="line" width={607} height={175} options={options} data={data} />
  );
}

export { mobileChart, desctopChart };
