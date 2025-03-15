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

  useEffect(() => {
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
          });
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }

    getCoin();
  }, [id, navigate]);

  return <div>{coin && <div>{coin.name}</div>}</div>;
};

export default Detail;
