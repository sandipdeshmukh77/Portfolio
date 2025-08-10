// Blog.tsx
import React from "react";
import { motion } from "framer-motion";
import data from "../data/DB";
import type { BlogEntry } from "../data/DB";

type BlogPost = {
    title: string;
    summary: string;
    date: string;
    link: string;
};

const posts: BlogPost[] = data.blogs.map((blog: BlogEntry) => ({
    title: blog.title,
    summary: blog.content.slice(0, 150) + "...",
    date: blog.date,
    link: blog.link || "#",
}));

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
        <section
            id="blog"
            className="bg-[hsl(240_10%_3.9%)] text-white py-20 px-4"
        >
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
                            <motion.div
                                key={idx}
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                custom={idx}
                            >
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-[hsl(240_5.9%_10%)] p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-transform hover:scale-[1.03] h-full relative"
                                >
                                    {/* External link icon at bottom right */}
                                    <span
                                        className="absolute bottom-2 right-2 text-blue-400"
                                        title="External link"
                                        aria-label="External link"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="inline-block align-text-bottom"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h3m0 0v3m0-3L10 14"
                                            />
                                        </svg>
                                    </span>
                                    <div className="flex items-center mb-2">
                                        <h3 className="text-lg font-semibold text-blue-400">
                                            {post.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-2">
                                        {post.date}
                                    </p>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {post.summary}
                                    </p>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
