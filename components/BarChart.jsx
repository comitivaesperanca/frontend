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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [searchMonth, setSearchMonth] = useState(new Date().getMonth() + 1);
  const [searchWeek, setSearchWeek] = useState(1);
  const [newsData, setNewsData] = useState('');
  const [isLoading, setLoading] = useState(false)

  const getDataBarChart = async (filters = '') => {
    //console.log(searchWeek)
    //console.log(searchMonth)
    try {
        const res = await fetch(
          API_URL + `news?month=${searchMonth}&week=${searchWeek}`,
            {
                method: 'GET'
            }
        );
        const data = await res.json();
        setNewsData(data)
        setLoading(false)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    setLoading(true)
    getDataBarChart()
  }, [isLoading]);

  const changeMonth = ({ target }) => {
    setSearchMonth(target.value);
    toast.success("Atualizando o sentimento semanal do Mercado.")
    getDataBarChart()
  };

  const changeWeek = ({ target }) => {
    setSearchWeek(target.value);
    toast.success("Atualizando o sentimento semanal do Mercado.")
    getDataBarChart()
  };
  
  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto px-6 pb-10 pt-6 border rounded-lg bg-white'>
      <ToastContainer   />
        <div className='flex justify-between items-center '>
          <h1 className='text-[#575353] font-bold'>Sentimento semanal do Mercado da Soja (em %):</h1>
          <select id="week" defaultValue={searchWeek} onChange={changeWeek} className="enabled:hover:border-gray-400 disabled:opacity-75 h-[30px] w-[90px] border rounded-lg">
            <option value="1">Semana 1</option>
            <option value="2">Semana 2</option>
            <option value="3">Semana 3</option>
            <option value="4">Semana 4</option>
          </select>
          <select id="month" defaultValue={searchMonth} onChange={changeMonth} className="enabled:hover:border-gray-400 disabled:opacity-75 h-[30px] w-[80px] border rounded-lg">
            <option value="1">Jan</option>
            <option value="2">Fev</option>
            <option value="3">Mar</option>
            <option value="4">Abr</option>
            <option value="5">Mai</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Ago</option>
            <option value="9">Set</option>
            <option value="10">Out</option>
            <option value="11">Nov</option>
            <option value="12">Dez</option>
          </select>
        </div>
        <SentimentsBarChart />
      </div>
    </>
  );
};

export default BarChart;
