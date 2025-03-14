import { useState, useEffect } from "react";
import Tabela from "../../components/tabela/Tabela";
import Form from "../../components/formulario/Form";
import ButtonCarregar from "../../components/buttonCarregar/ButtonCarregar";

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
};

type DataProps = {
  data: coinProps[];
};

const Home = () => {
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

        const result = dataResult.map((item) => {
          const resultFormated = {
            ...item,
            price: price.format(+item.priceUsd),
          };

          return resultFormated;
        });

        console.log(result);
        return result;
      });
  }

  return (
    <main className="bg-gray-800 w-full h-screen px-2">
      <Form />
      <Tabela />
      <ButtonCarregar />
    </main>
  );
};

export default Home;
