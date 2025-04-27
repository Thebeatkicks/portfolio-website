import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Nav({ isOpen, toggleMenu }) {
  const navItems = [
    
    { id: 1, text: "Portfolio", slug: "/portfolio" },
    { id: 2, text: "Contact", slug: "/contact" },
    { id: 3, text: "About", slug: "/about" },
    
  ];
  

  return (
    <nav
      className={`w-full md:w-1/2 px-4 py-6 md:px-0 bg-black md:justify-end absolute 
        md:static top-20 left-0 ${isOpen ? "flex" : "hidden"} md:flex`
      
}
>
<ul className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
  {navItems.map((item) => (
    <li key={item.id}>
      <Link
        to={item.slug}
        className="text-white hover:text-blue-500 transition duration-300"
        onClick={toggleMenu}
      >
        {item.text}
      </Link>
    </li>
  ))}
  <li className="hidden md:inline">
    <Link className="bg-blue-500 hover:bg-blue-700 max-w-36 transition px-6 py-3 rounded-full text-center w-auto" to="/login" onClick={toggleMenu}>
      Login
    </Link>
  </li>
  </ul>

</nav>

  );
Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
}


export default Nav;