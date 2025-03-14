import { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router";

const Form = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;
    navigate(`/detail/${input}`);
  }

  return (
    <form
      className="flex justify-center w-full max-w-xl m-auto gap-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="bg-white rounded-md w-full h-10 border-none p-2 outline-none"
        placeholder="Digite o nome da moeda Ex: Bitcoin"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="cursor-pointer bg-transparent">
        <BsSearch size={30} color="#fff" />
      </button>
    </form>
  );
};

export default Form;
