import { Link } from "react-router";
import LogoImg from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-30 w-full bg-gray-800">
      <Link to="/">
        <img
          src={LogoImg}
          alt="Logo cripto App"
          className="block mt-6 object-cover"
        />
      </Link>
    </header>
  );
};

export default Header;
