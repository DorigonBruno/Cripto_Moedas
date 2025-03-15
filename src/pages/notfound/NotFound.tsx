import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-gray-800">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mt-20 mb-2">Página 404</h1>
        <p className="font-lg text-white">Página não encontrada</p>
        <Link className="mt-4 underline text-white" to="/">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
