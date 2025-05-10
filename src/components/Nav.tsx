import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="bg-[hsl(240_3.7%_15.9%)] shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-white">Sandip Deshmukh</div>

                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 bg-[hsl(240_10%_3.9%)]">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block py-2 text-gray-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
