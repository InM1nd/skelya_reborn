import Link from 'next/link'
import React from 'react'

const Legal = () => {
  return (
    <section className='bg-black w-full h-screen flex justify-center text-lg py-10'>
      <div className='h-full max-w-4xl'>
      <div className='pb-10'>
        <Link href="/">
          <img src={'/svg/skelya_logo.svg'} alt='' className='h-[42px] lg:h-[56px]'/>
        </Link>
      </div>  
      <div className='flex justify-center gap-5 mb-10'>
        <Link 
          href='legal/privacy-policy'
          className='w-1/2 bg-purple-main px-10 py-5 text-black text-center text-3xl font-unbounded font-semibold'
        >
          Політика конфіденційності
        </Link>
        <Link 
          href='legal/terms'
          className='w-1/2 bg-purple-main px-10 py-5 text-black text-center text-3xl font-unbounded font-semibold'
        >
          Угода Користувача
        </Link>
      </div>
      <div className='flex justify-center'>
        <Link 
          className='w-full bg-purple-main px-10 py-5 text-black text-center text-3xl font-unbounded font-semibold' href='/'
        >
          На головну
        </Link>
      </div>
      </div>
    </section>
  )
}

export default Legal