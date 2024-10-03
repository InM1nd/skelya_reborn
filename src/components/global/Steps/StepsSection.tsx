import { StepCard } from "./StepCard";

const StepsSection: React.FC = () => {
  const steps = [
    {
      title: 'Обери та сплати послугу',
      stepNumber: '01',
      description:
        'У розділі "Сервіси" вибери той, який найкраще підходить твоїм потребам. Якщо сумніваєшся — звертайся до нашої підтримки, ми радо допоможемо. Після вибору переходь до оплати.',
      imageDesktop: '/Steps/Step_1.png',
      imageMobile: '/Steps/Step_1_M.png', 
    },
    {
      title: 'Розкажи про запит',
      stepNumber: '02',
      description:
        'Після оплати надішлемо посилання на телеграм-бота, де ти заповниш інформацію про себе. Якщо лист не прийшов, перевір "Спам" або звертайся до підтримки — надішлемо ще раз.',
      imageDesktop: '/Steps/Step_2.png',
      imageMobile: '/Steps/Step_2_M.png', 
    },
    {
      title: 'Консультуйся',
      stepNumber: '03',
      description:
        'Протягом 2 днів після того, як відповіси на всі питання в боті, ми підберемо консультанта під твій запит. Спеціаліст зв\'яжеться з тобою через телеграм, і ви зможете розпочати послугу.',
      imageDesktop: '/Steps/Step_3.png',
      imageMobile: '/Steps/Step_3_M.png',
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
          imageDesktop={step.imageDesktop}
          imageMobile={step.imageMobile}
        />
      ))}
    </div>
  );
};

export default StepsSection;