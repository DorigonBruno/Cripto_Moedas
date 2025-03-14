const ButtonCarregar = () => {
  function handleGetMore() {
    alert("tste");
  }

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-700 p-3 mt-6 rounded-md text-white font-bold hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer"
        onClick={handleGetMore}
      >
        Carregar mais
      </button>
    </div>
  );
};

export default ButtonCarregar;
