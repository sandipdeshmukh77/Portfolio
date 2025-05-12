import React from "react";
import { motion } from "framer-motion";

type BlogPost = {
    title: string;
    summary: string;
    date: string;
    link: string;
};

const posts: BlogPost[] = [
];

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            type: "spring",
        },
    }),
};

const Blog: React.FC = () => {
    return (
        <section id="blog" className="bg-[hsl(240_10%_3.9%)] text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Blog & Tutorials
                </h2>

                {posts.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg mt-10">
                        No blog posts available at the moment. Stay tuned for updates!
                    </p>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, idx) => (
                            <motion.a
                                key={idx}
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-[hsl(240_5.9%_10%)] p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-transform hover:scale-[1.03]"
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                custom={idx}
                            >
                                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                                <p className="text-sm text-gray-300 leading-relaxed">{post.summary}</p>
                            </motion.a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
