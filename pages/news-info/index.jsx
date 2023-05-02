import React from 'react';
import Image from 'next/image.js';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { PieChart } from '@/components/PieChart';

const NewsInfo = () => {
  const [newsData, setNewsData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [countNews, setCountNews] = useState(0)

  const router = useRouter()
  const { id } = router.query
  console.log(id)

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
          <p className='text-[#575353]'>Você está na tela "Visualizar notícia"</p>
        </div>
      </div>
      <div className='p-4'>
      <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='grid lg:grid-cols-7 gap-8 p-4'>
              <div className='lg:col-span-2 col-span-1 bg-white flex justify-between'>
                  <div className='flex flex-col w-full '>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Título:</label>
                    <input className="enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[43px] border p-4 rounded-lg" disabled/>
                  </div>
              </div>
              <div className='lg:col-span-2  bg-white flex '>
                  <div className='flex flex-col'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Data e hora da publicação:</label>
                    <input className="enabled:hover:border-gray-400 disabled:opacity-75 lg:w-[200px] sm:w-full h-[43px] border p-4 rounded-lg" disabled/>
                  </div>
              </div>
              <div className='lg:col-span-3 col-span-1 bg-white flex justify-between'>
                <div className='flex flex-col w-full '>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Fonte:</label>
                    <input className="enabled:hover:border-gray-400 disabled:opacity-75 lg:w-[200px] sm:w-full h-[43px] border p-4 rounded-lg" disabled/>
                  </div>
              </div>
          </div>
        </div>
        <div className='flex lg:flex-row sm:flex-col w-full py-4 justify-around'>
          <div className='w-full lg:w-[800px] lg:m-0  md:m-auto sm:m-auto  p-4 border rounded-lg bg-white '>
            <label className="block mb-2 text-sm font-medium text-gray-900">Conteúdo da notícia:</label>
            <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="..." disabled></textarea>
          </div>
          <div className='lg:w-[300px] sm:w-60 border rounded-lg bg-white lg:my-0 md:my-0 sm:my-2 lg:mx-0 md:mx-auto sm:mx-auto'>
            <PieChart title={"Sentimentos do texto"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;
