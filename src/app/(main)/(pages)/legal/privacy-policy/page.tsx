import Link from 'next/link'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className='bg-black w-full h-full flex justify-center text-lg py-10'>
      <div className='h-full max-w-4xl'>
      <div className='pb-10'>
        <Link href="/">
          <img src={'/svg/skelya_logo.svg'} alt='' className='h-[42px] lg:h-[56px]'/>
        </Link>
      </div>  
      <h1 className='text-white text-center text-4xl font-bold mb-5 font-unbounded'>Політика Конфіденційності<br/> (Privacy Policy)</h1>
      <div className='text-white-02 flex flex-col gap-5 pb-10'>
        <div className='flex flex-col gap-2'>
          <b className='text-xl font-unbounded'>1. Введення: </b>
          Ця Політика Конфіденційності визначає, як ФОП Мельник Вʼячеслав Олександрович, що веде діяльність під брендом “СКЕЛЯ”, збирає, використовує та захищає персональні дані користувачів платформи skelya.careers .
        </div>

        <div className='flex flex-col gap-2'>
          <b className='text-xl font-unbounded'>2. Збір Інформації: </b>
          Ми збираємо персональні дані, такі як імена, електронні адреси, професійні дані, які необхідні для надання наших послуг, включаючи аналіз резюме та кар’єрне планування.
        </div>

        <div className='flex flex-col gap-2'>
          <b className='text-xl font-unbounded'>3. Використання Інформації: </b>
          Зібрані дані використовуються для надання персоналізованих послуг, покращення якості сервісу, комунікації з користувачами, включаючи відправку інформаційних розсилок, дайджестів, рекламних пропозицій та інших повідомлень, пов’язаних із нашими послугами.
        </div>

        <div className='flex flex-col gap-2'>
          <b className='text-xl font-unbounded'>4. Безпека Даних: </b>
          Ми вживаємо всіх необхідних заходів для захисту персональних даних користувачів від несанкціонованого доступу, зміни, розголошення або знищення.
        </div>

        <div className='flex flex-col gap-2'>
          <b className='text-xl font-unbounded'>5. Розкриття Інформації Третім Особам: </b>
          Ми не передаємо персональні дані третім особам, крім випадків, коли це необхідно для надання послуг (наприклад, обробка платежів) або якщо це вимагається законодавством.
        </div>

        <div className='flex flex-col gap-2'>
          <b className='text-xl font-unbounded'>6. Права Користувачів: </b>
          Користувачі можуть в будь-який час отримати доступ до своїх даних, змінити їх або вимагати їх видалення, звернувшись до нас за вказаними контактами.
        </div>

        <div className='flex flex-col gap-2'>
          <b className='text-xl font-unbounded'>7. Використання Файлів Cookie: </b>
          Наш сайт використовує файли cookie для забезпечення функціональності сайту та покращення користувацького досвіду. Користувачі можуть налаштувати використання файлів cookie через свій веб-браузер.
        </div>

        <div className='flex flex-col gap-2'>
          <b className='text-xl font-unbounded'>8. Зміни в Політиці Конфіденційності:</b>
          Ми залишаємо за собою право змінювати цю політику конфіденційності в будь-який час. Всі зміни будуть публікуватися на веб-сайті.
        </div>
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

export default PrivacyPolicy