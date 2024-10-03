interface CategoryProps {
  title: string;
  color: string;
}

export const Category: React.FC<CategoryProps> = ({ title, color }) => {
  return (
    <div className={`${color} p-4 rounded-lg text-center`}>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};