import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-6 gap-24 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full items-center'>
                <p className='text-gray-600'>Acurácia do Modelo:</p>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>97%</span>
                </p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full items-center'>
                <p className='text-gray-600'>Total de notícias analisadas:</p>
                <p className='text-2xl font-bold'>2405</p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full items-center'>
                <p className='text-gray-600'>Total de visitantes:</p>
                <p className='text-2xl font-bold'>120</p>
            </div>
        </div>
    </div>
  )
}

export default TopCards