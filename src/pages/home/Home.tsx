import Tabela from "../../components/tabela/Tabela";
import Form from "../../components/formulario/Form";
import ButtonCarregar from "../../components/buttonCarregar/ButtonCarregar";

const Home = () => {
  return (
    <main className="bg-gray-800 w-full h-full px-2">
      <Form />
      <Tabela />
      <ButtonCarregar />
    </main>
  );
};

export default Home;
