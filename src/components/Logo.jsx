import { Link } from "react-router"

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="logo.svg"
        alt="logo"
        className="w-40"
      />
    </Link>
  );
}

export default Logo;