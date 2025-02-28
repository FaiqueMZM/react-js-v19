const Card = ({ title }) => {
  return (
    <div className="border border-gray-300 p-5 m-2 bg-gray-600">
      <h1 className="text-4xl text-white">{title}</h1>
    </div>
  );
};

export default Card;