import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { FiDownload } from "react-icons/fi";

const Header = () => { 
    return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Amhar<span className="text-accent">.</span> 
            </h1>
            </Link>

            {/* Desktop Nav and Resume Button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <a 
                    href="/path-to-resume.pdf" 
                    download="Amhar_Rishan_Resume.pdf" 
                    className="py-2 px-4 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-black flex items-center gap-2 transition"
                >
                    <span>Resume</span>
                    <FiDownload className="text-xl" />
                </a>
            </div>

            {/* Mobile Nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
    )
}

export default Header;
