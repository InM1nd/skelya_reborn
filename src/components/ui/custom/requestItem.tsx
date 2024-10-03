interface RequestItemProps {
  title: string;
}

export const RequestItems: React.FC<RequestItemProps> = ({ title }) => {
  return (
    <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600">
      {title}
    </button>
  );
};