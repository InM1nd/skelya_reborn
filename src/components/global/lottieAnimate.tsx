'use client'
import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieAnimationProps {
  animationData: object;  // JSON файл с анимацией

  speed?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, speed = 1.5 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animInstance.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,  
        autoplay: false, 
        animationData: animationData,
      });

      animInstance.current.setSpeed(speed);
    }

    return () => animInstance.current?.destroy();
  }, [animationData]);

  const handleMouseEnter = () => {
    animInstance.current?.play();
  };

  const handleMouseLeave = () => {
    animInstance.current?.stop();
  };

  return (
      <div 
        className="flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="text-white text-[24px] uppercase pr-3 md:text-[32px]">меню</span>
        <div
          className="w-4 h-4 md:w-5 md:h-5"
          ref={containerRef}
        />
      </div>
  );
};

export default LottieAnimation;