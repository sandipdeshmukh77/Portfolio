import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const skills: Record<string, string[]> = {
    "Programming": ["JavaScript", "Python"],
    "LLM Models": [
        "OpenAI's GPT",
        "DeepSeek",
        "Claude",
        "Gemini",
        "LLaMA-3",
    ],
    "AI & Tools": [
        "OpenAI API",
        "Azure AI",
        "Custom Neural Voice",
        "Langchain",
        "LangGraph",
        "Photoshop API",
    ],
    "Frameworks": [
        "LangChain",
        "LangGraph",
        "LangSmit",
    ],
    "Frontend": [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
    ],
    "Backend & API": ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    "Databases": ["MongoDB", "Cosmos DB"],
    "Dev Tools": ["Git", "Docker", "CI/CD"],
    "Cloud & DevOps": ["Azure", "Azure Functions", "Azure DevOps", "GitHub Actions"],
    "Tracing & Monitoring": ["Langfuse"],
    "Memory & Vector Stores": [
        "Azure AI Search ",
        "Qdrant DB",
        "Vector Embedding Models",
    ],
    "Infrastructure": [
        "MCP Server",
        "Neo4j Graph DB",
        "Azure (Cloud Deployment)",
        "Docker",
    ],
    "VR / 3D": ["Meta Quest (Oculus)"],
    "Knowledge Areas": [
        "Building and managing AI agent workflows",
        "Self-hosted tracing for AI applications",
        "Efficient vector store implementation",
        "Graph-based knowledge representation",
        "Deploying and optimizing AI solutions in the cloud",
        "Structuring vector embeddings to improve AI understanding",
    ],
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const Skills: React.FC = () => {
    return (
        <section
            id="skills"
            className="text-white px-4 py-16 bg-[hsl(240,10%,3.9%)]"
        >
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                    Tech Stack & Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                    {Object.entries(skills).map(([category, techList], i) => (
                        <motion.div
                            key={category}
                            className="bg-[hsl(240_5.9%_10%)] p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/30"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            custom={i}
                        >
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">
                                {category}
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                {techList.map((tech) => (
                                    <li key={tech} className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-blue-400" />
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
