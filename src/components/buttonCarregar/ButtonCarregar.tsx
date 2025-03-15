const ButtonCarregar = () => {
  function handleGetMore() {}

  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-blue-700 p-3 mt-6 rounded-md text-white font-bold hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer mb-6"
        onClick={handleGetMore}
      >
        Carregar mais
      </button>
    </div>
  );
};

export default ButtonCarregar;
