import React from 'react';
import { PieChart } from './PieChart.jsx';

const SentimentsPieChart = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1 className='text-[#575353]  font-bold'>Sentimento diário do Mercado:</h1>
      <PieChart />
    </div>
  );
};

export default SentimentsPieChart;
