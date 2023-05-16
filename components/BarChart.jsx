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
import { SentimentsBarChart } from './SentimentsBarChart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '@/config';
import { getWeekDay } from '@/utils/format';
import { getMonthDate } from '@/utils/format';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [newsData, setNewsData] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [labelsBarChart, setLabelsBarChart] = useState('');
  const [dailyPositiveSentiment, setDailyPositiveSentiment] = useState([]);
  const [dailyNeutralSentiment, setDailyNeutralSentiment] = useState([]);
  const [dailyNegativeSentiment, setDailyNegativeSentiment] = useState([]);

  const formatResultsDataBarChart = (data) => {
    var months        = [];
    var posSentiments = [];
    var negSentiments = [];
    var neuSentiments = [];

    data.map((res) => {
      months.push(getWeekDay(res.date))
      posSentiments.push(res.positiveCount)
      neuSentiments.push(res.neutralCount)
      negSentiments.push(res.negativeCount)
    });

    setLabelsBarChart(months);
    setDailyPositiveSentiment(posSentiments);
    setDailyNeutralSentiment(neuSentiments);
    setDailyNegativeSentiment(negSentiments);
  }

  useEffect(() => {
    setLoading(true)
    const getDataBarChart = async () => {
      try {
          const res = await fetch(
            API_URL + `news/WeeklySentiments`,
              {
                  method: 'GET'
              }
          );
          const data = await res.json();
          setNewsData(data);
          formatResultsDataBarChart(data)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    };

    getDataBarChart()
  }, [isLoading]);
  
  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto px-6 pb-10 pt-6 border rounded-lg bg-white'>
      <ToastContainer   />
        <div className='flex justify-between items-center '>
          <h1 className='text-[#575353] font-bold'>Sentimento semanal do Mercado da Soja:</h1>
        </div>
        <SentimentsBarChart labels={labelsBarChart} positive={dailyPositiveSentiment} negative={dailyNegativeSentiment} neutral={dailyNeutralSentiment} />
      </div>
    </>
  );
};

export default BarChart;
