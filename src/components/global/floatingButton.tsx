import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const FloatingButton = () => {
  return (
    <Link
      href="#intencive"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-blue text-black px-4 py-2 hover:bg-pink transition-colors duration-300 text-base sm:text-lg lg:text-xl font-semibold"
    >
      Кар&apos;єрний Інтенсив
      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
    </Link>
  );
};

export default FloatingButton;