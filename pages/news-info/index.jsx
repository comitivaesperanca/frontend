import React from 'react';
import Image from 'next/image.js';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { PieChart } from '@/components/PieChart';
import { formatFilters, formatFinalSentiment, formatFinalSentimentClass } from '@/utils/format.js';
import Modal from 'react-modal';
import { FiArrowRight } from 'react-icons/fi';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const NewsInfo = () => {
  const [newsData, setNewsData] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [sentiment, setSentiment] = useState('bg-grey-200')
  const [sentimentWanted, setSentimentWanted] = useState(0);
  const router = useRouter()
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const getNewsPaginated = async (filters = '') => {
    const { id } = router.query;

    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_API_URL + `news/${id}`,
            {
                method: 'GET'
            }
        );
        const { entity } = await res.json();
        setNewsData(entity)
        setLoading(false)
        setSentiment(formatFinalSentimentClass(entity?.finalSentiment))
    } catch (err) {
        setLoading(false)
    }
  };

  useEffect(() => {
    setLoading(true)
    getNewsPaginated()
  }, []);

  const reclassifySentiment = () => {
    openModal()
  }

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
                    <input className="enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[43px] border p-4 rounded-lg" disabled defaultValue={newsData?.title}/>
                  </div>
              </div>
              <div className='lg:col-span-2  bg-white flex'>
                  <div className='flex flex-col'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Data e hora da publicação:</label>
                    <input className="enabled:hover:border-gray-400 disabled:opacity-75 lg:w-[200px] sm:w-full h-[43px] border p-4 rounded-lg" disabled value={new Date(newsData?.publicationDate).toLocaleString()}/>
                  </div>
              </div>
              <div className='lg:col-span-3 col-span-1 bg-white flex justify-between'>
                <div className='flex flex-col w-full '>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Fonte:</label>
                    <input className="enabled:hover:border-gray-400 disabled:opacity-75 lg:w-[200px] sm:w-full h-[43px] border p-4 rounded-lg" disabled defaultValue={newsData?.source}/>
                  </div>
              </div>
          </div>
        </div>
        <div className='flex lg:flex-row phone:flex-col w-full py-4 justify-around'>
          <div className='w-full lg:w-[600px] h-[390px] lg:m-0 md:m-auto phone:m-auto  p-4 border rounded-lg bg-white'>
            <label className="block mb-2 text-sm font-medium text-gray-900">Conteúdo da notícia:</label>
            <textarea id="message" rows="8" className="block p-2.5 w-full h-[330px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="..." disabled value={newsData?.newsContent}></textarea>
          </div>
          <div>
            <div className='lg:w-[300px] h-[300px] border rounded-lg bg-white lg:my-0 md:my-0 phone:my-2 lg:mx-0 md:mx-auto phone:mx-auto'>
              <PieChart title={"Sentimentos do texto"} positive={newsData?.positiveSentiment} negative={newsData?.negativeSentiment} neutral={newsData?.neutralSentiment}/>
            </div>
            <div className={`lg:w-[300px] h-20 p-4 my-2 border rounded-lg bg-white flex justify-center items-center`}>
              <div className='flex justify-center flex-col'>
                <h1 className='text-[#575353] font-bold mb-2 text-sm'>Sentimento predominante da notícia:</h1>
                <span className={`${sentiment} text-[#575353] font-bold px-4 border rounded m-auto`} >
                  { formatFinalSentiment(newsData.finalSentiment) }
                </span>
              </div>
            </div>
            <div className={`lg:w-[300px] h-14 p-4 flex justify-center items-center cursor-pointer`} >
                <button className={`text-[#575353] font-bold px-4 border rounded m-auto bg-white hover:bg-green-200`} onClick={reclassifySentiment}>
                  Reclassificar sentimento
                </button>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className='flex flex-col justify-center lg:w-[400px] md:w-[200px] phone:md:w-[200px]'>
                <div className='flex justify-between font-bold'>
                  <h1>Sentimento atual</h1>
                  <h1>Sentimento desejado</h1>
                </div>
                <div className='flex bg-grey-200 justify-around items-center my-4'>
                  <span className={`${sentiment} text-[#575353] font-bold px-4 border rounded `} >
                    { formatFinalSentiment(newsData.finalSentiment) }
                  </span>
                  <FiArrowRight size={27}/>
                  <select id="sentimentWanted" name="sentimentWanted" value={sentimentWanted} onChange={e => { setSentimentWanted(e.currentTarget.value); }} className="h-[30px] p-[2px] border rounded-lg bg-white">
                      <option value="0">Sentimento</option>
                      <option value="1">Positivo</option>
                      <option value="2">Neutro</option>
                      <option value="3">Negativo</option>
                    </select>
                </div>
              </div>
              <div className='flex  items-center  bg-green-red justify-center'>
                <button className="bg-transparent text-[#575353] font-semibold  py-0 px-4 border border-[#575353] rounded h-[30px]" onClick={closeModal}>
                  Cancelar
                </button>
                <button className="bg-[#A3D69C] text-[#575353] font-bold ml-10 py-0 px-4 border rounded h-[30px]" >
                  Confimar
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;
