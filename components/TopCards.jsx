import { API_URL } from '@/config';
import { formatFinalSentimentClass } from '@/utils/format';
import React from 'react'
import { useState, useEffect } from 'react'

const TopCards = () => {
    const [countNews, setCountNews] = useState(0);
    const [mostFrequentSentimentOnWeek, setMostFrequentSentimentOnWeek] = useState('');
    const [frequentSentimentColor, setFrequentSentimentColor] = useState('bg-gray-200');

    const getTotalNews = async () => {
        try {
            const res = await fetch(
                API_URL + `count`,
                {
                    method: 'GET'
                }
            );
            const count = await res.json();
            setCountNews(count)
        } catch (err) {
            console.log(err);
        }
      };

      const getMostFrequentSentimentOnWeek = async () => {
        try {
            const res = await fetch(
                API_URL + `news/MostFrequentSentimentOnWeek`,
                {
                    method: 'GET'
                }
            );
            const sentiment = await res.text();
            setMostFrequentSentimentOnWeek(sentiment)
            setFrequentSentimentColor(formatFinalSentimentClass(sentiment))
        } catch (err) {
            console.log(err);
        }
      };

      useEffect(() => {
        getTotalNews()
        getMostFrequentSentimentOnWeek()
      }, []);

  return (
    <div className='grid lg:grid-cols-6 gap-16 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full items-center'>
                <p className='text-gray-600'>Acurácia do Modelo:</p>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>67%</span>
                </p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full items-center'>
                <p className='text-gray-600'>Total de notícias analisadas:</p>
                <p className='text-2xl font-bold'>{countNews}</p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full items-center'>
                <p className='text-gray-600' id="website-counter">Sentimento semanal do mercado:</p>
                <p className={`${frequentSentimentColor} flex justify-center items-center p-2 rounded-lg`}>
                    <span className='text-lg'>{mostFrequentSentimentOnWeek}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default TopCards