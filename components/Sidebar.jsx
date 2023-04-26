import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='w-300 h-auto p-4 bg-[#333333] flex flex-col'>
      {/* <div className='w-300 h-screen p-4 bg-[#333333] flex flex-col justify-between'> */}
        <div className='flex flex-row items-center'>
          <Link href='/'>
            <div className='flex align-middle justify-between items-center'>
              <Image src="/soy-logo.svg" alt="Radar da Soja" width={60} height={20} />
              <p className='text-center mx-8 my-8 text-white text-lg font-bold'>Radar da Soja</p>
            </div>
          </Link>
        </div>
        <div className='flex flex-col place-items-start'>
            <Link href='/'>
              <div className='my-4 p-3 flex align-middle justify-between items-center'>
                <Image src="/dash-icon.svg" alt="Radar da Soja" width={20} height={20} />
                <p className='mx-4 text-white'>Dashboard</p>
              </div>
            </Link>
            <Link href='/news'>
              <div className='my-4 p-3 flex align-middle justify-between items-center'>
                <Image src="/news-icon.svg" alt="Radar da Soja" width={20} height={20} />
                <p className='mx-4 text-white'>Notícias</p>
              </div>
            </Link>
            <Link href='/for-you'>
              <div className='my-4 p-3 flex align-middle justify-between items-center'>
                <Image src="/for-you-icon.svg" alt="Radar da Soja" width={20} height={20} />
                <p className='mx-4 text-white'>Para você</p>
              </div>
            </Link>
        </div>
        {/* <button>
          <p className='mx-4 text-white'>Sair</p>
        </button> */}
      </div>
      <main className='w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
