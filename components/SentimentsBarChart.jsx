import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function SentimentsBarChart(props) {
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
        maintainAspectRatio: false,
    };

    const chartData = {
        labels: props.labels,
        datasets: [
            {
                label: 'Positivo',
                //data: [10, 20, 30, 40, 50, 40, 45],
                data: props.positive,
                backgroundColor: [
                    'rgba(163, 214, 156)',
                ],
                borderColor: [
                    'rgba(163, 214, 156, 1)',
                ],
                borderWidth: 1,
            },
            {
                label: 'Neutro',
                //data: [50, 40, 30, 20, 10, 20, 30],
                data: props.neutral,
                backgroundColor: [
                    'rgba(229, 229, 229)',
                ],
                borderColor: [
                    'rgba(229, 229, 229, 1)',
                ],
                borderWidth: 1,
            }, 
            {
                label: 'Negativo',
                //data: [60, 70, 10, 5, 30, 10, 40],
                data: props.negative,
                backgroundColor: [
                    'rgba(247, 182, 196)',
                ],
                borderColor: [
                    'rgba(247, 182, 196, 1)',
                ],
                borderWidth: 1,
            }
        ]
    }

  return <Bar data={chartData} options={chartOptions} />;
}
