import React from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { data } from '../../data/data.js';
import Image from 'next/image.js';
import { useState, useEffect } from 'react'
import Link from 'next/link.js';
import BeatLoader from "react-spinners/BeatLoader";
import 'react-toastify/dist/ReactToastify.css';
import { formatDate, formatFilters, formatFinalSentiment } from '@/utils/format.js';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const news = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [countNews, setCountNews] = useState(0);

  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  const [term, setTerm]       = useState('');
  const [date, setDate]       = useState('');
  const [sentiment, setSentiment] = useState(0);
  const [source, setSource]       = useState('');

  const getNewsPaginated = async (filters = '') => {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_API_URL + `news/Paginated?pageSize=${pageSize}&pageIndex=${pageIndex}${filters}`,
            {
                method: 'GET'
            }
        );
        const { itemsOnPage } = await res.json();
        console.log(itemsOnPage);
        setNewsData(itemsOnPage)
        setLoading(false)
    } catch (err) {
        console.log(pageIndex);
        setLoading(false)
    }
  };

  const getTotalNews = async () => {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_API_URL + `count`,
            {
                method: 'GET'
            }
        );
        const count = await res.json();
        setCountNews(count)
    } catch (err) {
        console.log(pageIndex);
    }
  };

  useEffect(() => {
    getTotalNews()
    setLoading(true)
    getNewsPaginated()
    
  }, [pageIndex]);

  const cleanSearchFields = () => {
    setSentiment(0)
    setDate('')
    setSource('')
    setTerm('')
  }

  const getPreviousPage = () => {
    if(pageIndex == 1){
      setPageIndex(1)
    } else {
      setPageIndex(pageIndex - 1)
    }
  }

  const getNextPage = () => {
    setPageIndex(pageIndex + 1)
  }

  const searchNews = () => {
    var filter = formatFilters(term, source, date, sentiment);
    console.log(filter)
    setLoading(true)
    getNewsPaginated(filter)
  }

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
                    <input id='term' name='term' value={term} onChange={e => { setTerm(e.currentTarget.value); }} className="enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[53px] border p-4 rounded-lg" placeholder='Busque por termos'/>
                  </div>
              </div>
              <div className='lg:col-span-2 col-span-1 bg-white flex justify-between  '>
                  <div className='flex flex-row w-full items-center relative'>
                    <select id="sentiment" name="sentiment" value={sentiment} onChange={e => { setSentiment(e.currentTarget.value); }} className=" w-full h-[53px]  border p-4 rounded-lg bg-white  ">
                      <option value="0">Busque por sentimento</option>
                      <option value="1">Positivo</option>
                      <option value="2">Neutro</option>
                      <option value="3">Negativo</option>
                    </select>
                  </div>
              </div>
              <div className='lg:col-span-2 col-span-1 bg-white flex justify-between'>
                  <div className='flex flex-row w-full items-center relative'>
                    <input id='date' name='date' value={date} onChange={e => { setDate(e.currentTarget.value); }} lang="pt_BR" placeholder="Insira a data" className="enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[53px] border p-4 rounded-lg" type="date" />
                  </div>
              </div>
              <div className='lg:col-span-2 col-span-1 bg-white flex justify-between  '>
                  <div className='flex flex-row w-full items-center relative'>
                    <Image className='absolute right-0 mr-4' src="/font-icon.svg" alt="Radar da Soja" width={20} height={20} />
                    <input id='source' name='source' value={source} onChange={e => { setSource(e.currentTarget.value); }} className="enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[53px] border p-4 rounded-lg " placeholder='Busque por fonte'/>
                  </div>
              </div>
          </div>
          <div className='grid lg:grid-cols-2 p-4 gap-2'>
              <div className='lg:col-end-7 col-span-1 bg-white flex justify-between  '>
                <button className="bg-transparent text-[#575353] font-semibold  py-2 px-4 border border-[#575353] rounded" onClick={cleanSearchFields}>
                  Limpar
                </button>
              </div>
              <div className='lg:col-start-7 col-span-1 bg-white flex justify-between  '>
                <button className="bg-[#A3D69C] text-[#575353] font-bold py-2 px-4 border  rounded" onClick={searchNews}>
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
            {
            isLoading 
            ? <div className='flex w-full items-center justify-center'>
                <BeatLoader
                  color={'#A3D69C'}
                  loading={isLoading}
                  cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            : newsData.map((newsInfo, id) => (
              <Link key={id} href={'/news-info?id=' + newsInfo.id}>
              <li
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='pl-4'>
                    <p className='text-gray-800  overflow-hidden' id="title">
                        {newsInfo.title}
                    </p>
                  </div>
                </div>
                <p id="datetime" className='text-gray-600 sm:text-left text-right'>{formatDate(newsInfo.publicationDate)}</p>
                <div id="font" className='sm:flex hidden justify-between items-center'>
                  <p>{newsInfo.source}</p>
                </div>
                <div className='sm:flex hidden justify-between items-center'>
                  <p className='text-gray-600 sm:text-left text-right'>
                    <span
                      id="feeling"
                      className={
                        formatFinalSentiment(newsInfo.finalSentiment) == 'Positivo'
                          ? 'bg-green-200 p-2 rounded-lg'
                          : formatFinalSentiment(newsInfo.finalSentiment) == 'Neutro'
                          ? 'bg-gray-200 p-2 rounded-lg'
                          : 'bg-red-200 p-2 rounded-lg'
                      }
                    >
                      {formatFinalSentiment(newsInfo.finalSentiment)}
                    </span>
                  </p>
                    <FiChevronRight size={30}/>
                </div>
              </li>
              </Link>
            ))}
          </ul>
          
        </div>
        <div className="flex flex-col items-center my-4">
          
          <div className="inline-flex mt-2 xs:mt-0">
              <button className="bg-transparent hover:bg-green-200 text-[#575353] font-semibold  py-2 px-4 border border-[#575353] rounded" onClick={getPreviousPage}>
                <FiChevronLeft size={16}/>
              </button>
              <button className="bg-transparent text-[#575353] font-semibold  py-2 px-4 border border-[#575353] rounded">
                { pageIndex }
              </button>
              <button className="bg-transparent hover:bg-green-200  text-[#575353] font-semibold  py-2 px-4 border border-[#575353] rounded" onClick={getNextPage}>
                <FiChevronRight size={16}/>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default news;
