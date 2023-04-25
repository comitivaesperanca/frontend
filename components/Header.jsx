import React from 'react'

const Header = () => {
  return (
    <div className='h-[100px] flex justify-between items-center px-4 pt-4 bg-white-100 w-full border-b-2 border-[#CCCCCC]'>
      <div>
        <h2 className='font-bold text-xl'>Seja bem-vindo, Investidor</h2>
        <p className='text-[#575353]'>Você está na tela "Dashboard"</p>
      </div>
    </div>
  )
}

export default Header