import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register the necessary components
Chart.register(...registerables);

// Utility functions to generate data
const Utils = {
  numbers: (config) => {
    return Array.from(
      { length: config.count },
      () =>
        Math.floor(Math.random() * (config.max - config.min + 1)) + config.min
    );
  },
  transparentize: (color, opacity) => {
    const alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return color.replace(
      /rgba?\((\d+), (\d+), (\d+),?\s*(\d*\.?\d+)?\)/,
      (match, r, g, b) => {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
    );
  },
  CHART_COLORS: {
    red: "rgba(255, 99, 132, 1)",
    blue: "rgba(54, 162, 235, 1)",
  },
};

// Main LineChart component
const LineChart = (LineChartData) => {
  // Extracting data from props
  const sixMonthsData = LineChartData?.LineChartData?.sixMonths?.data || [];
  const weekData = LineChartData?.LineChartData?.week?.data || [];

  // Create labels from sixMonths data
  const labels = sixMonthsData?.map((item) => {
    const [year, month] = item?.month?.split("-");
    const date = new Date(year, month - 1);
    return date?.toLocaleString("default", { month: "short" });
  });

  // Extract data for Monthly and Weekly datasets
  const monthValue = sixMonthsData?.map((item) =>
    parseInt(item?.monthly_total_sales, 10)
  );
  const weekValue = weekData?.map((item) =>
    parseInt(item?.daily_total_sales, 10)
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Monthly",
        data: monthValue,
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },
      {
        label: "Weekly",
        data: weekValue,
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  };

  return <Line options={config.options} data={data} />;
};

export default LineChart;
