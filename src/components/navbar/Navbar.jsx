import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { header } from "../../data/data";
import styles from "./Navbar.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/SearchBar";

function Navbar() {
  // Start mobile nav
  const ref = useRef();

  const open = () => {
    ref.current.classList.add(styles.open);
  };
  const close = () => {
    ref.current.classList.remove(styles.open);
  };

  // End mobile nav

  return (
    <div className="container flex justify-between items-center p-3">
      {/* Search bar */}
      <SearchBar />
      {/* Links */}
      <ul
        ref={ref}
        className={`${styles.mobile_nav} flex gap-4 items-center capitalize z-20 max-[768px]:bg-gray-200`}
      >
        <li className="md:hidden flex justify-end w-full px-4 cursor-pointer text-xl">
          <FontAwesomeIcon onClick={close} icon={faXmark} />
        </li>
        {header.map((link) => {
          return (
            <li key={link.id}>
              <Link
                to={link.path}
                className="hover:text-[#BB86FC] transition duration-200 text-sm"
                onClick={close}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* mobile nav */}
      <FontAwesomeIcon
        onClick={open}
        icon={faBars}
        className="cursor-pointer text-xl md:hidden"
      />
    </div>
  );
}

export default Navbar;
