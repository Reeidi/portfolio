import { useEffect, useState } from "react";
import logo from "../../assets/images/logo_rbp.svg";
import { Link } from "react-scroll";
import LinkDecorationLeft from "../LinkDecoration/LinkDecorationLeft";
import LinkDecorationRight from "../LinkDecoration/LinkDecorationRight";
import "./NavBar.css";
import LinkDecorationSlash from "../LinkDecoration/LinkDecorationSlash";

const navItems = [
  { id: 1, name: "About me", url: "about" },
  { id: 2, name: "Design", url: "design" },
  { id: 3, name: "Development", url: "development" },
  { id: 4, name: "Projects", url: "projects" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-text-light)",
        // color: "#e9ffdd",
        // backgroundColor: "#a0b9f8",
        // color: "#1F4D3A",
      }}
      activeClass="active-link"
      className={`font-bold text-lg text-primary-dark hover:text-primary-dark2 px-3 py-2 rounded-tr-xl rounded-bl-xl transition-all duration-200`}
      // className={`font-bold text-lg text-[#014643] px-3 py-2 rounded-tr-xl rounded-bl-xl hover:bg-black/5 hover:text-[#2E6B52] transition-all duration-200`}
    >
      <LinkDecorationLeft />
      {item.name}
      <LinkDecorationSlash />
      <LinkDecorationRight />
    </Link>
  </li>
));

export default function NavBar() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${position > 50
        ? "bg-soft-white border-b border-gray-300"
        : "bg-white border-white"
        } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content my-0">
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link
            href="#about"
            to={`about`}
            smooth={true}
            duration={900}
          >
            <img src={logo} className="h-8 sm:h-14" alt="logo" />
          </Link>

          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box right-0 z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {menu}
            </ul>
          </div>
        </div>

        <div className="md:flex items-center">
          <ul className="hidden md:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};
