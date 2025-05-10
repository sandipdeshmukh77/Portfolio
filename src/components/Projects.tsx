// src/components/Projects.tsx
import React from "react";
import { Github, ExternalLink } from "lucide-react"; // Lucide icons for GitHub and external link

interface Project {
    title: string;
    description: string;
    githubUrl: string;
    liveUrl: string;
}

const projects: Project[] = [
    {
        title: "AI Avatar Customization",
        description:
            "Developed a custom AI avatar with voice cloning and dynamic facial expressions for a major brand using Azure and custom neural voice models.",
        githubUrl: "#", // Replace with your GitHub link
        liveUrl: "#", // Replace with live demo or project URL
    },
    {
        title: "Creative Automation Generation",
        description:
            "Created a creative automation tool using Photoshop API and AI to assemble dynamic media content for marketing purposes.",
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "E-commerce VR Experience",
        description:
            "Built a fully immersive VR-based e-commerce experience for a client using Meta Oculus VR, supporting mall navigation and checkout functionality.",
        githubUrl: "#",
        liveUrl: "#",
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-[hsl(240_3.7%_15.9%)] text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-[hsl(240_5.9%_10%)] p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex justify-between">
                                {/* GitHub Link */}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-600 transition"
                                >
                                    <Github size={24} />
                                </a>
                                {/* Live Demo Link */}
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-600 transition"
                                >
                                    <ExternalLink size={24} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
