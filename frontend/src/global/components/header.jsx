import Menu from "../../assets/SVGs/menu.svg";
import Close from "../../assets/SVGs/close.svg";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [visiblity, setVisibility] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setVisibility(false);
                setIsMobile(false);
            }
            else {
                setIsMobile(true);
            }
        });
    });

    const items = [
        {
            label: "Home",
            to: "/",
        },
        {
            label: "Company",
            to: "/",
        },
        {
            label: "Marketplace",
            to: "/",
        },
        {
            label: "Team",
            to: "/",
        },
        {
            label: "Contact Us",
            to: "/",
        },
    ];

    return <header>
        <nav className="bg-white border-gray-200 px-4 md:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="https://flowbite.com" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
                </a>
                <div className="flex items-center  md:order-2">
                    <Link to="/login" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 focus:outline-none">Log in</Link>
                    <button onClick={() => setVisibility(state => !state)} data-collapse-toggle="mobile-menu-2" type="button" className="items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden inline-flex hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <img src={Menu} className={`${!visiblity ? "block" : "hidden"} w-6 h-6`} />
                        <img src={Close} className={`${visiblity ? "block" : "hidden"} w-6 h-6`} />
                    </button>
                </div>
                <div style={{ display: visiblity ? 'flex' : isMobile ? 'none' : 'flex' }} className="justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 w-full text-center">
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link to={item.to} className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0" aria-current="page">{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    </header>;
};

export default Header;