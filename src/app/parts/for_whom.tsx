import { Card } from "@/components/global/card"
import Title from "@/components/global/title"
import { BigButton } from "@/components/ui/custom/BigButton"


export const ForWhom = () => {
  return(
    <section className="w-full pb-20 lg:pb-40 lg:min-h-[1100px]" id="for_whom">
      <Title>для кого</Title>
      <div className="w-full flex justify-center">
        <div className="w-full container flex justify-center flex-col px-2 pt-10 md:px-6">   
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pb-3">
            <Card
              title=""
              image="/svg/Pink_Forwhom.svg" // Путь к изображению
              items={['ПРОФОРІЄНТАЦІЯ', 'ПЕРША РОБОТА', 'РОБОТА ПІСЛЯ КУРСІВ']}
            />
            <Card
              title=""
              image="/svg/Purple_Forwhom.svg"
              items={['ПОШУК РОБОТИ', 'ТЕСТОВЕ ІНТЕРВ\'Ю', 'ПІДГОТОВКА РЕЗЮМЕ']}
            />
            <Card
              title=""
              image="/svg/Green_Forwhom.svg"
              items={['ПІДВИЩЕННЯ', 'ЗМІНА РОБОТИ', 'РОБОТА ЗА КОРДОНОМ']}
            />
            <Card
              title=""
              image="/svg/Blue_Forwhom.svg"
              items={['ПЕРЕКВАЛІФІКАЦІЯ', 'УВІЙТИ В АЙТІ', 'КАР\'ЄРНА СТРАТЕГІЯ']}
            />
          </div>
          <a href="https://t.me/skelya_careers">
            <BigButton
              text={"Свій запит"}
            />
          </a>
        </div>
      </div>
    </section>
  )
}