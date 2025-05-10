// src/components/Footer.tsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"; // Icon components from lucide-react

const Footer: React.FC = () => {
    return (
        <footer className="bg-[hsl(240_10%_3.9%)] text-gray-400 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left side: Copyright */}
                <div className="text-sm text-gray-500">
                    © {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </div>

                {/* Right side: Social links with icons */}
                <div className="flex space-x-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/sandipdeshmukh77"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:text-white transition-colors"
                    >
                        <Github size={18} />
                        <span>GitHub</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:text-white transition-colors"
                    >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:sandipdeshmukh77@gmail.com"
                        className="flex items-center space-x-1 hover:text-white transition-colors"
                    >
                        <Mail size={18} />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
