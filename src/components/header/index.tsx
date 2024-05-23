import { Link } from "react-router-dom";
import Logo from "~/assets/btc-logo.png";

const Header = () => {
  return (
    <div className="items-center flex pl-5 sm:pl-28 h-24 bg-[#052c54]">
      <Link to="/" className="cursor-pointer">
        <img src={Logo} alt="Logo" width={215} height={36} />
      </Link>
    </div>
  );
};

export default Header;
