import { Card } from "@/components/global/card"
import Title from "@/components/global/title"
import { BigButton } from "@/components/ui/custom/BigButton"


export const ForWhom = () => {
  return(
    <section className="w-full pb-7 lg:pb-0 lg:h-screen lg:min-h-[1000px]" id="for_whom">
      <Title>для кого</Title>
      <div className="w-full flex justify-center">
        <div className="w-full container flex justify-center flex-col px-6 pt-10">   
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
          <BigButton
            text={"Свій запит"}
          />
        </div>
      </div>
    </section>
  )
}