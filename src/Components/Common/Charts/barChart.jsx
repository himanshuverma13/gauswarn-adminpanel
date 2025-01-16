import React from "react"; 
import {
  Chart as ChartJS,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary components for Chart.js
ChartJS.register(Title, Legend);


// Chart data and options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

// BarChart Component
const BarChart = ( barChartData ) => {
  // Prepare data dynamically based on barChartData
  const monthsData = barChartData?.barChartData?.sixMonths?.data?.map(item => item?.month);
  const usersData = barChartData?.barChartData?.sixMonths?.data?.map(item => item?.monthly_total_users);
  const weekData = barChartData?.barChartData?.week?.data?.map(item => item?.daily_total_users);

  const data = {
    labels: monthsData,
    datasets: [
      {
        label: "User Info",
        data: usersData,
        borderColor: "rgba(54, 162, 235, 1)", // Blue color
        backgroundColor: "rgba(54, 162, 235, 0.5)", // Transparent blue
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    //   {
    //     label: "User Info",
    //     data: weekData,
    //     borderColor: "rgba(255, 99, 132, 1)", // Red color
    //     backgroundColor: "rgba(255, 99, 132, 0.5)", // Transparent red
    //     borderWidth: 2,
    //     borderRadius: 5,
    //     borderSkipped: false,
    //   },
      
    ],
  };

  return (
    <Bar data={data} options={options} />
  );
};

export default BarChart;
