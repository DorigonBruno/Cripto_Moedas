import { BsSearch } from "react-icons/bs";

import { Link } from "react-router";

const Home = () => {
  return (
    <main className="bg-gray-800 w-full h-screen px-2">
      <form className="flex justify-center w-full max-w-xl m-auto gap-6">
        <input
          type="text"
          className="bg-white rounded-md w-full h-10 border-none p-2 outline-none"
        />
        <button type="submit" className="cursor-pointer bg-transparent">
          <BsSearch size={30} color="#fff" />
        </button>
      </form>

      <table className="border-spacing-x-4 mt-6 max-w-6xl m-auto table-fixed w-full">
        <thead>
          <tr className="hidden md:table-row text-white text-sm md:text-md lg:text-lg">
            <th scope="col" className="p-3 text-center">
              Moeda
            </th>
            <th scope="col" className="p-3 text-center">
              Valor Mercado
            </th>
            <th scope="col" className="p-3 text-center">
              Preço
            </th>
            <th scope="col" className="p-3 text-center">
              Volume
            </th>
            <th scope="col" className="p-3 text-center">
              Mudança 24hrs
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-gray-700 text-sm md:text-md lg:text-lg border-b-1 border-solid md:border-gray-100 text-white">
            <td
              className="p-3 text-center font-bold flex justify-between items-center md:table-cell relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full border-b-2 border-gray-100 md:border-none"
              data-label="Moeda"
            >
              <div>
                <Link to="/detail/bitcoin">
                  <span>Bitcoin </span> | BTC
                </Link>
              </div>
            </td>

            <td
              className="p-3 text-center font-bold flex justify-between items-center md:table-cell relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full border-b-2 border-gray-100 md:border-none"
              data-label="valor mercado"
            >
              1T
            </td>

            <td
              className="p-3 text-center font-bold flex justify-between items-center md:table-cell relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full border-b-2 border-gray-100 md:border-none"
              data-label="preco"
            >
              8.000
            </td>

            <td
              className="p-3 text-center font-bold flex justify-between items-center md:table-cell relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full border-b-2 border-gray-100 md:border-none"
              data-label="Volume"
            >
              2B
            </td>

            <td
              className="p-3 text-center font-bold flex justify-between items-center md:table-cell relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full"
              data-label="Mudança 24hrs"
            >
              <span>1.20</span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Home;
