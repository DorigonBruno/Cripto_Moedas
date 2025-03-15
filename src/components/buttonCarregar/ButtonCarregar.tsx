import React from "react";

interface ButtonCarregarProps {
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const ButtonCarregar: React.FC<ButtonCarregarProps> = ({
  offset,
  setOffset,
}) => {
  function handleGetMore() {
    if (offset === 0) {
      setOffset(10);
      return;
    } else {
      setOffset(offset + 10);
    }
  }

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-700 p-3 mt-6 rounded-md text-white font-bold hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer mb-6"
        onClick={handleGetMore}
      >
        Carregar mais
      </button>
    </div>
  );
};

export default ButtonCarregar;
