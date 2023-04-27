import React from 'react';
import { PieChart } from '../components/PieChart.jsx';


const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='h-[100px] flex justify-between items-center px-4 pt-4 bg-white-100 w-full border-b-2 border-[#CCCCCC]'>
        <div>
          <h2 className='font-bold text-xl'>Seja bem-vindo, Investidor</h2>
          <p className='text-[#575353]'>Você está na tela "Para você"</p>
        </div>
      </div>
      <div className='p-4'>
        <div className='w-full lg:w-[800px] m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <label className="block mb-2 text-sm font-medium text-gray-900">Insira seu texto para receber o sentimento</label>
          <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="..."></textarea>
          <div className='grid lg:grid-cols-2 py-4 gap-2'>
              <div className='lg:col-end-7 col-span-1 bg-white flex justify-between  '>
                <button className="bg-transparent text-[#575353] font-semibold px-4 border border-[#575353] rounded h-[30px]">
                  Limpar
                </button>
              </div>
              <div className='lg:col-start-7 col-span-1 bg-white flex justify-between  '>
                <button className="bg-[#A3D69C] text-[#575353] font-bold px-4 border rounded h-[30px]">
                  Gerar sentimento
                </button>
              </div>
          </div>
        </div>
        <div className='flex lg:flex-row md:flex-col sm:flex-col  m-auto lg:w-[800px] py-4 justify-center'>
          <div className='lg:w-[300px] sm:w-60 p-4 border rounded-lg bg-white lg:m-0 sm:m-auto'>
            <PieChart title={"Sentimentos do texto"} />
          </div>
          <div className='lg:w-[200px] lg:my-0 h-20 p-4 mx-4 border rounded-lg bg-white flex justify-center items-center sm:my-10'>
            <div className='flex justify-center flex-col'>
              <h1 className='text-[#575353] font-bold mb-2'>Sentimento do texto:</h1>
              <span className="bg-[#A3D69C] text-[#575353] font-bold px-4 border rounded m-auto">
                Positivo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default customers;
