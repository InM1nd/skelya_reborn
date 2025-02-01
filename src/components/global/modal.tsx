"use client"

import emailjs from '@emailjs/browser'; 
import { useRef, useState, FormEvent } from "react";

interface ModalState {
  isOpen: boolean;
  toggleModal: () => void;
}

interface ContactFormModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  onClose: () => void;
}

export const useModal = (): ModalState => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleModal };
};

const ContactFormModal = ({ isOpen, toggleModal }: ContactFormModalProps) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      toggleModal();
    }, 150); // время совпадает с длительностью анимации
  };

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

  return (
    <>
      {isOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50
        ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
        <div className="relative bg-gray w-auto shadow-lg z-1 p-10 pb-[90px]"> 
          <div className="px-10">  
            <div className="flex justify-end w-full pb-7">
              <button
                onClick={handleClose}
                className="text-white text-xl font-bold"
              >
                <img src={'/svg/close_btn.svg'} alt='' className='h-[30px] md:h-[30px] hover:stroke-blue'/>
              </button>
            </div> 
            
            <h2 className="text-5xl font-bold text-center text-white mb-9">
              МАЄШ ПИТАННЯ?
            </h2>
        
            <form className="space-y-10" ref={form} onSubmit={sendEmail}>
              {/* Input: Ім'я */}
              <div className="relative">
                <input
                  type="text"
                  className="peer w-full border-[1px] border-white bg-transparent text-white outline-none py-3 px-4 placeholder-transparent focus:border-[#6566F1] transition"
                  placeholder="Ім'я"
                  id="name"
                  required 
                  name="from_name"
                />
                <label
                  htmlFor="name"
                  className="absolute normal-case text-xl left-3 top-0 px-1 text-white bg-gray transition-all transform -translate-y-1/2 scale-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[12px] peer-focus:scale-100 peer-focus:-translate-y-[22px] peer-focus:text-purple-main"
                >
                  Імя
                </label>
              </div>

              {/* Input: Email */}
              <div className="relative">
                <input
                  type="email"
                  className="peer w-full border-[1px] border-white bg-transparent text-white outline-none py-3 px-4 placeholder-transparent focus:border-[#6566F1] transition"
                  placeholder="Імейл"
                  id="email"
                  required
                  name="user_email"
                />
                <label
                  htmlFor="email"
                  className="absolute normal-case text-xl left-3 top-0 px-1 text-white bg-gray transition-all transform -translate-y-1/2 scale-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[12px] peer-focus:scale-100 peer-focus:-translate-y-[22px] peer-focus:text-purple-main"
                >
                  Імейл
                </label>
              </div>
        
              {/* Textarea: Твій запит */}
              <div className="relative">
                <textarea
                  className="peer w-full border-[1px] border-white bg-transparent text-white outline-none py-3 px-4 placeholder-transparent focus:border-[#6566F1] transition"
                  placeholder="Твій запит"
                  rows={5}
                  id="request"
                  required
                  name="message"
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
                className="w-full bg-[#6566F1] text-black py-6 px-14 text-3xl font-semibold mt-6 hover:bg-blue transition"
              >
                Відправити
              </button>
            </form>
            <div className="absolute bg-[#6566F1] h-full w-full p-8 top-4 left-4 z-[-2]" />
          </div>
        </div> 
        {isSuccess && (
          <div className='absolute bg-opacity-50 backdrop-blur-sm h-full w-full flex flex-col justify-center items-center'>
          <p className='text-3xl'>Повідомлення надіслано!</p> 
          </div>
        )}
      </div>    
      )}
    </>
  );
};

export default ContactFormModal;