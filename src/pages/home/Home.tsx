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

      <table className="border-spacing-x-4 m-0 p-0 w-full table-fixed">
        <thead>
          <tr className="text-white">
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
          <tr className="bg-gray-700">
            <td
              className="before:content-[attr(data-label))] md:before:content-none rounded-tl-md rounded-bl-md p-3 text-center"
              data-label="Moeda"
            >
              <div>
                <Link to="/detail/bitcoin">
                  <span>Bitcoin | BTC</span>
                </Link>
              </div>
            </td>

            <td
              className="before:content-[attr(data-label))] md:before:content-none p-3 text-center"
              data-label="valor mercado"
            >
              1T
            </td>

            <td
              className="before:content-[attr(data-label))] md:before:content-none p-3 text-center"
              data-label="preco"
            >
              8.000
            </td>

            <td
              className="before:content-[attr(data-label))] md:before:content-none p-3 text-center"
              data-label="Volume"
            >
              2B
            </td>

            <td
              className="before:content-[attr(data-label))] md:before:content-none rounded-tr-md rounded-br-md p-3 text-center"
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
