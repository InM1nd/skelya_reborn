interface BigButtonProps {
  text: string;
}

export const BigButton: React.FC<BigButtonProps> = ({ text }) => {
  return (
    <button className=" w-full bg-purple-main text-black text-2xl font-bold text-left uppercase pl-4 py-4 hover:bg-blue sm:text-3xl md:pl-12 md:py-9 md:text-5xl xl:text-8xl ">
      {text}
      <span className="ml-4">➔</span>
    </button>
  );
};