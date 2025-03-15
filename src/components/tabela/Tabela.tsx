import { useState, useEffect } from "react";
import { Link } from "react-router";

type coinProps = {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  vwap24Hr: string;
  changePercent24Hr: string;
  rank: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  explorer: string;
  volumeUsd24Hr: string;
  formatedPrice?: string;
  formatedMarket?: string;
  formatedVolume?: string;
};

type DataProps = {
  data: coinProps[];
};

const Tabela = () => {
  const [coins, setCoins] = useState<coinProps[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    fetch("https://api.coincap.io/v2/assets?limit=10&offset=0")
      .then((resp) => resp.json())
      .then((data: DataProps) => {
        const dataResult = data.data;

        const price = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });

        const priceCompact = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact",
        });

        const result = dataResult.map((item) => {
          const resultFormated = {
            ...item,
            formatedPrice: price.format(+item.priceUsd),
            formatedMarket: priceCompact.format(+item.marketCapUsd),
            formatedVolume: priceCompact.format(+item.volumeUsd24Hr),
          };
          return resultFormated;
        });

        setCoins(result);
      });
  }

  return (
    <table className="border-spacing-y-2 border-separate mt-3 max-w-6xl m-auto table-fixed w-full">
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
        {coins.length > 0 &&
          coins.map((item) => (
            <tr
              className="bg-slate-700 text-sm md:text-md lg:text-lg border-b-1 border-solid md:border-gray-100 text-white md:hover:bg-slate-500 transition duration-200 ease-in-out"
              key={item.id}
            >
              <td
                className="md:table-cell p-3 text-center font-bold flex justify-between items-center  relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full border-b-2 border-gray-100 md:border-none md:rounded-tl-lg md:rounded-bl-lg "
                data-label="Moeda"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                    alt="logoCript"
                    className="w-5 h-5 transition-all duration-300  hover:scale-150 z-50"
                  />
                  <Link
                    to={`/detail/${item.id}`}
                    className="hover:text-teal-400 transition duration-200 ease-in-out"
                  >
                    <span>{item.name}</span> | {item.symbol}
                  </Link>
                </div>
              </td>

              <td
                className="p-3 text-center font-bold flex justify-between items-center md:table-cell relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full border-b-2 border-gray-100 md:border-none"
                data-label="valor mercado"
              >
                {item.formatedMarket}
              </td>

              <td
                className="p-3 text-center font-bold flex justify-between items-center md:table-cell relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full border-b-2 border-gray-100 md:border-none"
                data-label="preco"
              >
                {item.formatedPrice}
              </td>

              <td
                className="p-3 text-center font-bold flex justify-between items-center md:table-cell relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full border-b-2 border-gray-100 md:border-none"
                data-label="Volume"
              >
                {item.formatedVolume}
              </td>

              <td
                className="p-3 text-center font-bold flex justify-between items-center md:table-cell relative before:content-[attr(data-label)] before:text-gray-400 md:before:content-none before:text-sm w-full md:rounded-tr-lg md:rounded-br-lg"
                data-label="Mudança 24hrs"
              >
                <span
                  className={`${
                    +item.changePercent24Hr > 0
                      ? "text-green-400"
                      : "text-red-600"
                  }`}
                >
                  {Number(item.changePercent24Hr).toFixed(3)}
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Tabela;
