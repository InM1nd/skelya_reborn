import { StepCard } from "./StepCard";

const StepsSection: React.FC = () => {
  const steps = [
    {
      title: 'Обери та сплати послугу',
      stepNumber: '01',
      description:
        'У розділі "Сервіси" вибери той, який найкраще підходить твоїм потребам. Якщо сумніваєшся — звертайся до нашої підтримки, ми радо допоможемо. Після вибору переходь до оплати.',
      imageDesktop: '/svg/How_Card.svg',
      imageMobile: '/svg/How_Card_Mob.svg', 
      image: '/Step_1.png',
    },
    {
      title: 'Розкажи про запит',
      stepNumber: '02',
      description:
        'Після оплати надішлемо посилання на телеграм-бота, де ти заповниш інформацію про себе. Якщо лист не прийшов, перевір "Спам" або звертайся до підтримки — надішлемо ще раз.',
      imageDesktop: '/svg/How_Card.svg',
      imageMobile: '/svg/How_Card_Mob.svg', 
      image: '/Step_2.png',
    },
    {
      title: 'Консультуйся',
      stepNumber: '03',
      description:
        'Протягом 2 днів після того, як відповіси на всі питання в боті, ми підберемо консультанта під твій запит. Спеціаліст зв\'яжеться з тобою через телеграм, і ви зможете розпочати послугу.',
      imageDesktop: '/svg/How_Card.svg',
      imageMobile: '/svg/How_Card_Mob.svg',
      image: '/Step_3.png',
    },
  ];

  return (
    <div className="flex flex-col gap-8 h-full lg:justify-between">
      {steps.map((step, index) => (
        <StepCard
          key={index}
          title={step.title}
          // stepNumber={step.stepNumber}
          // description={step.description}
          // imageDesktop={step.imageDesktop}
          // imageMobile={step.imageMobile} 
          image={step.image}
        />
      ))}
    </div>
  );
};

export default StepsSection;