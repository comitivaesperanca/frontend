import React, { useState, useEffect } from 'react';
import { PieChart } from './PieChart.jsx';
import { API_URL } from '@/config/index.js';

const SentimentsPieChart = () => {
  const [dailySentiments, setDailySentiments] = useState([]);
  const [dailyPositiveSentiment, setDailyPositiveSentiment] = useState(0);
  const [dailyNeutralSentiment, setDailyNeutralSentiment] = useState(0);
  const [dailyNegativeSentiment, setDailyNegativeSentiment] = useState(0);


  const setSentiments = (data) => {
    data.map((entity) => {
      if(entity.sentiment == 'Positiva'){
        setDailyPositiveSentiment(entity.count);
      }

      if(entity.sentiment == 'Neutra'){
        setDailyNeutralSentiment(entity.count);
      }

      if(entity.sentiment == 'Negativa'){
        setDailyNegativeSentiment(entity.count);
      }
    });
  }

  const getDailySentiments = async () => {
    try {
        const res = await fetch(
          API_URL + `news/DailySentiments`,
            {
                method: 'GET'
            }
        );
        const { entity } = await res.json();
        setDailySentiments(entity)
        setSentiments(entity)
    } catch (err) {
      toast.error("Erro ao buscar o sentimento diário do mercado.")
      console.log(err)
    }
  };

  useEffect(() => {
    getDailySentiments()
  }, []);

  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1 className='text-[#575353]  font-bold'>Sentimento diário do Mercado:</h1>
      <PieChart title={""} positive={dailyPositiveSentiment} negative={dailyNegativeSentiment} neutral={dailyNeutralSentiment} />
    </div>
  );
};

export default SentimentsPieChart;
