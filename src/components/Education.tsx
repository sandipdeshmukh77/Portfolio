import React from "react";
import { GraduationCap, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type EducationItem = {
    title: string;
    institution: string;
    year: string;
    description?: string;
    certificateUrl?: string;
};

const education: EducationItem[] = [
    {
        title: "Learn Complete Python In Simple Way",
        institution: "Udemy",
        year: "2020",
        description:
            "Mastered Python programming fundamentals, data structures, OOP concepts, and practical application development.",
        certificateUrl: "https://www.udemy.com/certificate/UC-393b7899-26e5-4666-af05-65125e0b54f4/",
    },
    {
        title: "Learn Ethical Hacking From Scratch",
        institution: "Udemy",
        year: "2022",
        description:
            "Learned penetration testing, network security, vulnerability assessment, and ethical hacking methodologies.",
        certificateUrl: "https://www.udemy.com/certificate/UC-3a35c8ba-24ee-47ef-a12c-288a91cbcc80/",
    },
    {
        title: "The Complete JavaScript Course 2022: From Zero to Expert!",
        institution: "Udemy",
        year: "2022",
        description:
            "Comprehensive JavaScript training covering ES6+, async programming, DOM manipulation, and modern JS frameworks.",
        certificateUrl: "https://www.udemy.com/certificate/UC-73024a5d-99e2-4513-a430-ee11367365e8/",
    },
    {
        title: "Master Generative AI: Automate Content Effortlessly with AI",
        institution: "Udemy",
        year: "2023",
        description:
            "Explored generative AI technologies, prompt engineering, and content automation using various AI tools and platforms.",
        certificateUrl: "https://www.udemy.com/certificate/UC-c44f17f1-e003-4522-ab48-03d9f5ba55cb/",
    },
    {
        title: "The Complete 2022 Web Development Bootcamp",
        institution: "Udemy",
        year: "2023",
        description:
            "Full-stack web development course covering HTML, CSS, JavaScript, Node.js, React, and database management.",
        certificateUrl: "https://www.udemy.com/certificate/UC-869612d3-39ad-4bdf-8e71-77327c57f783/",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5 },
    }),
};

const Education: React.FC = () => {
    return (
        <section id="education" className="bg-[hsl(240_10%_3.9%)] text-white py-10 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">Certifications</h2>

                <div className="space-y-8">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-[hsl(240_5.9%_10%)] p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/30 text-left"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                        >
                            <div className="flex items-center gap-3 mb-2 text-blue-400">
                                <GraduationCap className="w-5 h-5" />
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-gray-300 italic">
                                {item.institution} • {item.year}
                            </p>
                            {item.description && (
                                <p className="text-gray-400 mt-2">{item.description}</p>
                            )}
                            {item.certificateUrl && (
                                <a
                                    href={item.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm mt-4 text-blue-500 hover:underline"
                                >
                                    View Certificate <ExternalLink className="ml-1 w-4 h-4" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
