// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   LinearScale,
//   PointElement,
//   CategoryScale,
//   Tooltip,
//   Legend,
//   Title,
// } from 'chart.js';

// // Register the necessary components and scales
// ChartJS.register(LineElement, LinearScale, PointElement, CategoryScale, Tooltip, Legend, Title);

// const LineChart = ({ ChartData, }) => {
//     console.log('ChartData: ', ChartData);



  
//   const labels = ['Total Tasks', 'Completed Tasks',];
//   const datasets = [
//     {
//       label: 'Total Task',
//       data: [0, ChartData?.totalTasks], // Dynamic data for Dataset 1
//       borderColor: 'rgba(255, 99, 132, 1)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Completed Task',
//       data: [0,ChartData?.compeletedTask], // Dynamic data for Dataset 2
//       borderColor: 'rgba(54, 162, 235, 1)',
//       backgroundColor: 'rgba(54, 162, 235, 0.5)',
//     },
//   ];
//   const data = {
//     labels: labels,
//     datasets: datasets,
//   };
//   const getMaxValue = (totalTasks) => {
//     if (totalTasks === undefined || totalTasks === null) return 0;

//     const digits = totalTasks.toString().length; // Get the number of digits
//     return Math.pow(10, digits) * 1; // Calculate the max value
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {
//       responsive: true,
//       scales: {
//         y: {
//           min: 0, // Set the y-axis minimum
//           max: getMaxValue(ChartData?.totalTasks ) // Set the y-axis maximum
//         }
//       },
//     //   plugins: {
//     //     legend: {
//     //       position: 'top',
//     //     },
//     //   }
//     },
//   };



  


//   return (
//     <div>
//       <Line height={250} data={data} options={config.options} />
//     </div>
//   );
// };

// export default LineChart;
// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register the necessary components
Chart.register(...registerables);

// Utility functions to generate data
const Utils = {
  months: (config) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    return months.slice(0, config.count);
  },
  numbers: (config) => {
    return Array.from({ length: config.count }, () => Math.floor(Math.random() * (config.max - config.min + 1)) + config.min);
  },
  transparentize: (color, opacity) => {
    const alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return color.replace(/rgba?$$(\d+), (\d+), (\d+),?\s*(\d*\.?\d+)?$$/, (match, r, g, b) => {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    });
  },
  CHART_COLORS: {
    red: 'rgba(255, 99, 132, 1)',
    blue: 'rgba(54, 162, 235, 1)',
  }
};

// Main LineChart component
const LineChart = () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = Utils.months({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Monthly',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },
      {
        label: 'Weekly',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
       
      }
    },
  };

  return <Line options={config.options} data={data} />;
};

export default LineChart;