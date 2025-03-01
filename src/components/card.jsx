import { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div
      className="border border-gray-300 p-5 m-2 bg-gray-600 flex flex-col items-start"
      onClick={() => setCount((prev) => prev + 1)}
    >
      <h1 className="text-4xl text-white">
        {title} <br />{" "}
        <span className="text-xs">{count ? `count:${count}` : null}</span>
      </h1>
      <div className="w-full flex justify-end mt-2">
        <button
          className={`px-2 border border-black rounded cursor-pointer ${
            hasLiked ? "bg-blue-500" : "bg-transparent"
          }`}
          onClick={() => setHasLiked((prev) => !prev)}
        >
          {hasLiked ? "Liked" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default Card;
