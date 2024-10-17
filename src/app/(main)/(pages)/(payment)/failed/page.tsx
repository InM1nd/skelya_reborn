import Link from 'next/link'
import React from 'react'

const Failed = () => {
  return (
    <section className='bg-black w-full h-screen flex justify-center text-lg py-10'>
          <div className='h-full max-w-4xl px-2'>
          <div className='pb-10'>
            <Link href="/">
              <img src={'/svg/skelya_logo.svg'} alt='' className='h-[42px] lg:h-[56px]'/>
            </Link>
          </div>  
          <div className='flex flex-col justify-center gap-5 mb-10 text-white'>
          <h1 className="text-5xl text-center font-bold text-grey-600 mb-10">Оплата не пройшла!</h1>
            <p className="text-2xl text-center mb-10">На жаль, щось пішло не так під час обробки твоєї оплати. Спробуйте ще раз або зв&apos;яжіться з нами для вирішення проблеми.</p>
            <p className="text-2xl text-center mb-10">Якщо тобі потрібна допомога, скористайся підтримкою через Телеграм</p>
          </div>
          <div className='flex justify-center'>
            <Link 
              className="w-full h-[100px] flex justify-center items-center mt-4  bg-purple-main text-4xl text-black font-bold hover:bg-blue transition duration-200 uppercase sm:pl-10 sm:justify-start sm:text-5xl" href='/'
            >
              На головну
            </Link>
          </div>
          </div>
        </section>
  )
}

export default Failed