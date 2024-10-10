"use client"

import emailjs from '@emailjs/browser'; 
import { useRef, useState, FormEvent } from "react";

const ContactFormModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm('service_yb8b94j', 'template_ytnv6zk', form.current, 'tz4Y_9ETUjuo63w3o')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            form.current?.reset();
          }, 2000);
      }, (error) => {
          console.log(error.text);
      });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Кнопка открытия модального окна */}
      <button
        onClick={toggleModal}
        className="text-blue-500 underline"
      >
        Открыть форму
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">

        <div className="relative bg-gray w-auto shadow-lg z-1 p-10 pb-[90px]"> 
          <div className="px-10">  
            <div className="flex justify-end w-full pb-7">
              <button
                onClick={toggleModal}
                className="text-white text-xl font-bold"
              >
                <img src={'/svg/close_btn.svg'} alt='' className='h-[30px] md:h-[30px]'/>
              </button>
            </div> 
            
            <h2 className="text-5xl font-bold text-center text-white mb-9">
              МАЄТЕ ПИТАННЯ
            </h2>
        
            <form className="space-y-10" ref={form} onSubmit={sendEmail}>
              {/* Input: Ім'я */}
            <div className="relative">
              <input
                type="text"
                className="peer w-full border-[1px] border-white bg-transparent text-white outline-none py-3 px-4 placeholder-transparent focus:border-[#6566F1] transition"
                placeholder="Ім'я"
                id="name"
              />
              <label
                htmlFor="name"
                className="absolute normal-case text-xl left-3 top-0 px-1 text-white bg-gray transition-all transform -translate-y-1/2 scale-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[12px] peer-focus:scale-100 peer-focus:-translate-y-[22px] peer-focus:text-purple-main"
              >
                Імя
              </label>
              </div>

              {/* Input: Номер телефону */}
              <div className="relative">
                <input
                  type="text"
                  className="peer w-full border-[1px] border-white bg-transparent text-white outline-none py-3 px-4 placeholder-transparent focus:border-[#6566F1] transition"
                  placeholder="Номер телефону"
                  id="phone"
                />
                <label
                  htmlFor="phone"
                  className="absolute normal-case text-xl left-3 top-0 px-1 text-white bg-gray transition-all transform -translate-y-1/2 scale-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[12px] peer-focus:scale-100 peer-focus:-translate-y-[22px] peer-focus:text-purple-main"
                >
                  Номер телефону
                </label>
              </div>
        
              {/* Textarea: Твій запит */}
              <div className="relative">
                <textarea
                  className="peer w-full border-[1px] border-white bg-transparent text-white outline-none py-3 px-4 placeholder-transparent focus:border-[#6566F1] transition"
                  placeholder="Твій запит"
                  rows={5}
                  id="request"
                />
                <label
                  htmlFor="request"
                  className="absolute normal-case text-xl left-3 top-0 px-1 text-white bg-gray transition-all transform -translate-y-1/2 scale-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-100 peer-focus:-translate-y-[22px] peer-focus:text-purple-main"
                >
                  Твій запит
                </label>
              </div>
        
              <button
                type="submit"
                className="w-full bg-[#6566F1] text-black py-6 px-14 text-3xl font-semibold mt-6 hover:bg-blue-600 transition"
              >
                ОТРИМАТИ КОНСУЛЬТАЦІЮ
              </button>
            </form>
            <div className="absolute bg-[#6566F1] h-full w-full p-8 top-4 left-4 z-[-2]" />
          </div>
        </div> 
        {isSuccess && (
          <div>
          <p>Message sent successfully!</p> 
          <p>Form will be cleared shortly.</p>
          </div>
        )}
      </div>    
      )}
    </>
  );
};

export default ContactFormModal;