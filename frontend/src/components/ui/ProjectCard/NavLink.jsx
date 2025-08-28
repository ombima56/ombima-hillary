import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="block py-2 pl-3 pr-4 text-tertiary sm:text-xl rounded md:-p-0 hover:text-white transition-colors duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
