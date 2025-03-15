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
  formatedMarke?: string;
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
        {coins.length > 0
          ? coins.map((item) => (
              <tr
                className="bg-gray-700 text-sm md:text-md lg:text-lg border-b-1 border-solid md:border-gray-100 text-white"
                key={item.id}
              >
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
            ))
          : null}
      </tbody>
    </table>
  );
};

export default Tabela;
