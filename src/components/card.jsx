import { useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="border border-gray-300 p-5 m-2 bg-gray-600 flex flex-col items-start">
      <h1 className="text-4xl text-white">{title}</h1>
      <div className="w-full flex justify-end mt-2">
        <button
          className={`px-2 border border-black rounded cursor-pointer ${
            hasLiked ? "bg-blue-500" : "bg-transparent"
          }`}
          // onClick={() => setHasLiked((prev) => !prev)}
          onClick={() => setHasLiked(!hasLiked)}
        >
          {hasLiked ? "Liked" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default Card;
