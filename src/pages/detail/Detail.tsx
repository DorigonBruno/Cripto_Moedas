import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { coinProps } from "../../components/tabela/Tabela";

type ResponseData = {
  data: coinProps;
};

type ErrorData = {
  error: string;
};

type DataProps = ResponseData | ErrorData;

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coin, setCoin] = useState<coinProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function getCoin() {
      try {
        fetch(`https://api.coincap.io/v2/assets/${id}`)
          .then((response) => response.json())
          .then((data: DataProps) => {
            if ("error" in data) {
              navigate("/");
              return;
            }

            const price = Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            });

            const priceCompact = Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              notation: "compact",
            });

            const dataFormated = {
              ...data.data,
              formatedPrice: price.format(+data.data.priceUsd),
              formatedMarket: priceCompact.format(+data.data.marketCapUsd),
              formatedVolume: priceCompact.format(+data.data.volumeUsd24Hr),
            };

            setCoin(dataFormated);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }

    getCoin();
  }, [id, navigate]);

  if (loading) {
    return <h4 className="text-4xl text-center mt-4">Carregando Detalhes</h4>;
  }
  return (
    <div className="w-full h-screen bg-gray-800">
      {coin && (
        <div className="flex flex-col items-center px-2">
          <h1 className="mb-4 text-xl md:text-2xl md:my-4 text-white font-bold">
            {coin.name} {coin.symbol}
          </h1>

          <div className="bg-gray-600 md:mt-3 flex flex-col p-3 gap-2 w-full max-w-sm rounded-md text-white">
            <img
              src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
              alt="logo da criptomoeda"
              className="block object-cover w-12 h-12 self-center hover:rotate-360 transition duration-700 ease-in-out"
            />
            <span className="block text-center text-md font-bold md:text-3xl">
              {coin.name} | {coin.symbol}
            </span>

            <span className="font-bold text-lg md:text-xl text-center">
              Preço:
              <span className="text-sm md:text-md ml-3">
                {coin.formatedPrice}
              </span>
            </span>

            <span className="font-bold tex-md md:text-xl text-center">
              Mercado:
              <span className="text-sm md:text-md ml-3">
                {coin.formatedMarket}
              </span>
            </span>

            <span className="font-bold text-lg md:text-xl text-center">
              Volume:
              <span className="text-sm md:text-md ml-3">
                {coin.formatedVolume}
              </span>
            </span>

            <span className="font-bold text-lg md:text-xl text-center">
              Mudança 24hr:
              <span
                className={` ${"text-sm md:text-xl ml-3"} ${
                  +coin.changePercent24Hr > 0
                    ? "text-green-400"
                    : "text-red-600"
                }`}
              >
                {Number(coin.changePercent24Hr).toFixed(3)}
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
