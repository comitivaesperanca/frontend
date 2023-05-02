import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart(props) {
  const data = {
    labels: ['Positivo', 'Neutro', 'Negativo'],
    datasets: [
      {
        label: 'Sentimentos',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(163, 214, 156)',
          'rgba(229, 229, 229)',
          'rgba(247, 182, 196)',
        ],
        borderColor: [
          'rgba(163, 214, 156, 1)',
          'rgba(229, 229, 229, 1)',
          'rgba(247, 182, 196, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            text: props.title,
            display: true,
        }
    },
    maintainAspectRatio: false,
    responsive: true
};

  return <Pie data={data} options={options}  />;
}
