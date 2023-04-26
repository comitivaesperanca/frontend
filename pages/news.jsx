import React from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { data } from '../data/data.js';
import Image from 'next/image.js';
import { useState, useEffect } from 'react'

const news = () => {
  const [newsData, setNewsData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [countNews, setCountNews] = useState(0)

  useEffect(() => {
    setLoading(true)
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((value) => {
        setNewsData(value)
        setLoading(false)
      });
    
      setCountNews(newsData.length)

  }, [])

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='h-[100px] flex justify-between items-center px-4 pt-4 bg-white-100 w-full border-b-2 border-[#CCCCCC]'>
        <div>
          <h2 className='font-bold text-xl'>Seja bem-vindo, Investidor</h2>
          <p className='text-[#575353]'>Você está na tela "Notícias"</p>
        </div>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='grid lg:grid-cols-8 gap-8 p-4'>
              <div className='lg:col-span-2 col-span-1 bg-white flex justify-between  '>
                  <div className='flex flex-row w-full items-center relative'>
                    <Image className='absolute right-0 mr-4' src="/search-icon.svg" alt="Radar da Soja" width={20} height={20} />
                    <input class="enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[53px] border p-4 rounded-lg" placeholder='Busque por termos'/>
                  </div>
              </div>
              <div className='lg:col-span-2 col-span-1 bg-white flex justify-between  '>
                  <div className='flex flex-row w-full items-center relative'>
                    <select id="feeling" class="enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[53px]  border p-4 rounded-lg  text-[#CCCCCC]">
                      <option selected>Busque por sentimento</option>
                      <option value="1">Positivo</option>
                      <option value="2">Neutro</option>
                      <option value="3">Negativo</option>
                    </select>
                  </div>
              </div>
              <div className='lg:col-span-2 col-span-1 bg-white flex justify-between'>
                  <div className='flex flex-row w-full items-center relative'>
                    <input placeholder="Insira a data" class="enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[53px] border p-4 rounded-lg" type="date" />
                  </div>
              </div>
              <div className='lg:col-span-2 col-span-1 bg-white flex justify-between  '>
                  <div className='flex flex-row w-full items-center relative'>
                    <Image className='absolute right-0 mr-4' src="/font-icon.svg" alt="Radar da Soja" width={20} height={20} />
                    <input class="enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[53px] border p-4 rounded-lg " placeholder='Busque por termos'/>
                  </div>
              </div>
          </div>
          <div className='grid lg:grid-cols-2 p-4 gap-2'>
              <div className='lg:col-end-7 col-span-1 bg-white flex justify-between  '>
                <button class="bg-transparent text-[#575353] font-semibold  py-2 px-4 border border-[#575353] rounded">
                  Limpar
                </button>
              </div>
              <div className='lg:col-start-7 col-span-1 bg-white flex justify-between  '>
                <button class="bg-[#A3D69C] text-[#575353] font-bold py-2 px-4 border  rounded">
                  Buscar
                </button>
              </div>
          </div>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span className='text-black-600 font-bold'>Título da Notícia</span>
            <span className='text-black-600 font-bold sm:text-left text-right'>Data e Hora</span>
            <span className='text-black-600 font-bold hidden md:grid'>Fonte</span>
            <span className='text-black-600 font-bold hidden sm:grid'>Sentimento</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='pl-4'>
                    <p className='text-gray-800' id="title">
                        Preço da Soja aumenta 50% em 2019 por conta de tal pessoa...
                    </p>
                  </div>
                </div>
                <p id="datetime" className='text-gray-600 sm:text-left text-right'>25/04/2023 15:30</p>
                <div id="font" className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                </div>
                <div className='sm:flex hidden justify-between items-center'>
                  <p className='text-gray-600 sm:text-left text-right'>
                    <span
                      id="feeling"
                      className={
                        order.status == 'Positivo'
                          ? 'bg-green-200 p-2 rounded-lg'
                          : order.status == 'Neutro'
                          ? 'bg-blue-200 p-2 rounded-lg'
                          : 'bg-yellow-200 p-2 rounded-lg'
                      }
                    >
                      {order.status}
                    </span>
                  </p>
                  <FiChevronRight size={30}/>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
        <div class="flex flex-col items-center my-10">
          <span class="text-sm text-gray-700 mt-10">
              Mostrando <span class="font-semibold text-gray-900">1</span> até <span class="font-semibold text-gray-900">10</span> de <span class="font-semibold text-gray-900">{countNews}</span> Notícias
          </span>
          <div class="inline-flex mt-2 xs:mt-0">
              <button class="bg-transparent hover:bg-green-200 text-[#575353] font-semibold  py-2 px-4 border border-[#575353] rounded">
                <FiChevronLeft size={16}/>
              </button>
              <button class="bg-transparent text-[#575353] font-semibold  py-2 px-4 border border-[#575353] rounded">
                  <FiChevronRight size={16}/>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default news;
