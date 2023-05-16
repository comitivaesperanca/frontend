import React, { useState, useEffect, CSSProperties } from 'react';
import { PieChart } from '../../components/PieChart.jsx';
import BeatLoader from "react-spinners/BeatLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_PREDICT_URL } from '@/config/index.js';
import { formatFinalSentiment, formatFinalSentimentClass } from '@/utils/format.js';
import Head from 'next/head.js';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ForYou = () => {
  const [chartVisibility, setChartVisibility] = useState('hidden');
  const [feelingVisibility, setFeelingVisibility] = useState('hidden');
  const [newsText, setNewsText] = useState('');
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#A3D69C");
  const [newsData, setNewsData] = useState('');
  const [sentiment, setSentiment] = useState('bg-grey-200');
  const [dailyPositiveSentiment, setDailyPositiveSentiment] = useState(0);
  const [dailyNeutralSentiment, setDailyNeutralSentiment] = useState(0);
  const [dailyNegativeSentiment, setDailyNegativeSentiment] = useState(0);

  const cleanSearchFields = () => {
    setNewsText('')
    setChartVisibility('hidden')
    setFeelingVisibility('hidden')
  }

  const setPredictedData = (data) => {
    setNewsData(data);
    setDailyPositiveSentiment(data.positive);
    setDailyNeutralSentiment(data.neutral);
    setDailyNegativeSentiment(data.negative);
    console.log(formatFinalSentimentClass(data.final_sentiment));
    console.log(data.final_sentiment);
    setSentiment(formatFinalSentimentClass(data.final_sentiment))
  }

  const getPredictText = (newsText) => {
        fetch(
          API_PREDICT_URL + `predict?text_content=${newsText}&model_type=rede_neural`,
          {
            method: 'GET',
          }
        ).then((res) => res.json())
        .then((data) => {
          setLoading(false)
          setPredictedData(data)
          toast.success('Sentimento gerado com sucesso!')
          setChartVisibility('flex')
          setFeelingVisibility('flex')
        })
        .catch((err) => {
          toast.error('Erro ao gerar sentimento da notícia. Motivo:' + err)
          setLoading(false)
        });
  };

  const generateFeeling = async () => {
    if(newsText == ''){
      toast.error("É necessário inserir um texto para gerar sentimento.")
    } else {
      setLoading(true)
      getPredictText(newsText)
    }
  }

  return (
    <>
    <Head>
        <title>Radar da Soja - Para Você</title>
        <meta name='description' content='Radar da Soja' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/soy-logo.svg' />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/datepicker.min.js"></script>
    </Head>
    <div className='bg-gray-100 min-h-screen'>
      <div className='h-[100px] flex justify-between items-center px-4 pt-4 bg-white-100 w-full border-b-2 border-[#CCCCCC]'>
        <div>
          <h2 className='font-bold text-xl'>Seja bem-vindo, Investidor</h2>
          <p className='text-[#575353]'>Você está na tela "Para você"</p>
        </div>
      </div>
      <div className='p-4'>
        <ToastContainer   />
        <div className='w-full lg:w-[800px] m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <label className="block mb-2 text-sm font-medium text-gray-900">Insira seu texto para receber o sentimento</label>
          <textarea id="newsText" rows="8" name='newsText' value={newsText} onChange={e => { setNewsText(e.currentTarget.value); }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="..."></textarea>
          <div className='grid lg:grid-cols-2 py-4 gap-2'>
              <div className='lg:col-end-7 col-span-1 bg-white flex justify-between  '>
                <button onClick={cleanSearchFields} className="bg-transparent text-[#575353] font-semibold px-4 border border-[#575353] rounded h-[30px]">
                  Limpar
                </button>
              </div>
              <div className='lg:col-start-7 col-span-1 bg-white flex justify-between  '>
                <button onClick={generateFeeling} className="bg-[#A3D69C] text-[#575353] font-bold px-4 border rounded h-[30px]">
                  Gerar sentimento
                </button>
              </div>
          </div>
        </div>
        <div className={`flex lg:flex-row md:flex-col sm:flex-col  m-auto lg:w-[800px] py-4 justify-center`}>
          {
            loading 
            ? <BeatLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            : <>
              <div className={`lg:w-[300px] sm:w-60 p-4 border rounded-lg bg-white lg:m-0 sm:m-auto ${chartVisibility}`}>
                <PieChart title={"Sentimentos da Notícia"} positive={dailyPositiveSentiment} negative={dailyNegativeSentiment} neutral={dailyNeutralSentiment} />
              </div>
              <div className={`lg:w-[200px] lg:my-0 h-20 p-4 mx-4 border rounded-lg bg-white flex justify-center items-center sm:my-10 ${feelingVisibility}`}>
                <div className='flex justify-center flex-col'>
                  <h1 className='text-[#575353] font-bold mb-2'>Sentimento da notícia:</h1>
                  <span className={`${sentiment} text-[#575353]  font-bold px-4 border rounded m-auto`} >
                    { newsData.final_sentiment }
                  </span>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </div>
    </>
  );
};

export default ForYou;
