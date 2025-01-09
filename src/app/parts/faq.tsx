'use client'

import Title from "@/components/global/title"
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'


type FAQItem = {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Як підготуватись до консультації?",
    answer: "Постарайтеся максимально чітко сформулювати свій запит, а далі - наш консультант тебе зорієнтує"
  },
  {
    question: "Чи зможу я перенести вже заплановану консультацію?",
    answer: "Так, але не пізніше ніж за 24 години"
  },
  {
    question: "Що робити, якщо консультант не з’явився на запланований дзвінок?",
    answer: "Це щось дуже не типове для нас! Напиши нам в телеграмі і ми заплануємо нову зустріч!"
  },
  {
    question: "Я не знаю, чи вистачить мені однієї консультації?",
    answer: "Це не проблема! Наш експерт під час сесії зорієнтує чи є потреба у подальших зустрічах і якщо так,ти зможеш отримати на них знижку!"
  }
]

export const Faq = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return(
    <section className="w-full h-full pb-4 sm:pb-8 lg:pb-20" id="Faq">
      <Title>ЧАСТІ ПИТАННЯ</Title>
      <div className="w-full space-y-8 text-white px-4 py-6 xl:px-[40px] xl:py-[120px]">
        {faqs.map((faq, index) => (
          <div key={index} className="border-4 border-gray">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center text-left font-unbounded gap-0 p-4 sm:p-6 lg:p-[50px] ${
                openIndex === index ? 'bg-gray' : ''
              }`}
            >
              <span className="font-semibold text-[13px] sm:text-2xl lg:text-[26px]">{faq.question}</span>
              {openIndex === index ? <Minus className="font-bold w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" /> : <Plus className="font-bold w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />}
            </button>
            
            <div className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-[500px] p-4 sm:p-6 lg:p-[50px]' : 'max-h-0'
            }`}>
              <p className="font-medium text-[16px] sm:text-xl lg:text-[26px]">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq;