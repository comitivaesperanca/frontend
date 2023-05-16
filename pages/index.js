import Head from 'next/head';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import SentimentsPieChart from '../components/SentimentsPieChart';
import { useState, useEffect } from 'react'
import BeatLoader from "react-spinners/BeatLoader";

export default function Home() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 5000)
  }, []);
  return (
    <>
      <Head>
        <title>Radar da Soja</title>
        <meta name='description' content='Radar da Soja' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link rel='icon' href='/soy-logo.svg' />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/datepicker.min.js"></script>
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        {
          isLoading 
          ? <div className='flex w-full items-center justify-center'>
            <BeatLoader
              color={'#A3D69C'}
              loading={isLoading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          : <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
              <BarChart />
              <SentimentsPieChart />
            </div>
        }
      </main>
    </>
  );
}
