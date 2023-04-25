import Head from 'next/head';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';

export default function Home() {
  return (
    <>
      <Head>
        <title>Radar da Soja</title>
        <meta name='description' content='Radar da Soja' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/soy-logo.svg' />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        {/* <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div> */}
      </main>
    </>
  );
}
