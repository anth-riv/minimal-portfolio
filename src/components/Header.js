import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Header = () => {
    
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);
    
    return (
        <header className="flex justify-between px-5 py-2 bg-gray-900 text-white">
            <a href="/" className="logo text-2xl font-bold text-accent">
                Anthony
            </a>
        
            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <a href="/#">About</a>
                        <a href="/#projects">Projects</a>
                        <a href="/#contact">Contact</a>
                        <a href="/#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        

            {/* Mobile Nav */}
            <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
                <ul className="flex flex-col">
                    <li>
                        <a href="/#">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                    <li>
                        <a href="/#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        
        
            {/* Toggle Button */}
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>
        </header>
    )
}

export default Header;