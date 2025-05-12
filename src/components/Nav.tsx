import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
    ];

    return (
        <nav className="backdrop-blur bg-[hsl(240_3.7%_15.9%)/0.8] shadow-lg border-b border-[hsl(240_3.7%_15.9%)] fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-white hover:text-gray-300 transition">
                    Sandip Deshmukh
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-gray-300 hover:text-white transition relative group"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="flex flex-col bg-[hsl(240_10%_3.9%)] px-4 pb-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="py-2 text-gray-300 hover:text-white transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
