// src/components/About.tsx
import React from "react";
import { Briefcase, Code } from "lucide-react"; // Import icons from Lucide

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="bg-[hsl(240_10%_3.9%)] text-white py-20 px-4"
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    About Me
                </h2>

                {/* Bio */}
                <p className="text-lg text-gray-400 mb-8">
                    I'm Sandip Deshmukh, a Senior Software Engineer with a passion for building full-stack applications and creating great user experiences. I specialize in web technologies like React, Node.js, and Tailwind CSS, with a strong focus on both front-end and back-end development.
                </p>

                {/* Skills / Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                    {/* Skill 1 */}
                    <div className="p-6 bg-[hsl(240_5.9%_10%)] rounded-xl shadow-lg">
                        <Code size={36} className="mx-auto text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-200">Tech Stack</h3>
                        <p className="text-gray-400 mt-2">
                            React, Node.js, Express, MongoDB, Tailwind CSS, Azure, Firebase
                        </p>
                    </div>

                    {/* Skill 2 */}
                    <div className="p-6 bg-[hsl(240_5.9%_10%)] rounded-xl shadow-lg">
                        <Briefcase size={36} className="mx-auto text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-200">Experience</h3>
                        <p className="text-gray-400 mt-2">
                            3+ years of experience in full-stack development, working on enterprise-level applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
