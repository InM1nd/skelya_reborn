import Link from 'next/link'
import React from 'react'

const Failed = () => {
  return (
    <section>
        <h1>Failed</h1>
        <div className='flex justify-center'>
          <Link 
            className='w-full bg-purple-main px-10 py-5 text-black text-center text-3xl font-unbounded font-semibold' href='/'
          >
            На головну
          </Link>
      </div>
    </section>
  )
}

export default Failed