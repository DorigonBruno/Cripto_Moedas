import { BsSearch } from "react-icons/bs";

const Form = () => {
  return (
    <form className="flex justify-center w-full max-w-xl m-auto gap-6">
      <input
        type="text"
        className="bg-white rounded-md w-full h-10 border-none p-2 outline-none"
      />
      <button type="submit" className="cursor-pointer bg-transparent">
        <BsSearch size={30} color="#fff" />
      </button>
    </form>
  );
};

export default Form;
