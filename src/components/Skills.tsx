// src/components/Skills.tsx
import React from "react";

const skills = {
    "Frontend": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend & API": ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    "Cloud & DevOps": ["Azure", "Azure Functions", "Azure DevOps", "GitHub Actions"],
    "AI & Tools": ["OpenAI API", "Azure AI", "Custom Neural Voice", "Photoshop API"],
    "VR / 3D": ["Meta Quest (Oculus)", "Three.js", "A-Frame"],
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="bg-[hsl(240_3.7%_15.9%)] text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">Tech Stack & Skills</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
                    {Object.entries(skills).map(([category, techList]) => (
                        <div
                            key={category}
                            className="bg-[hsl(240_5.9%_10%)] p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">{category}</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {techList.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
