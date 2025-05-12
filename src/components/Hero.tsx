// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className=" text-white min-h-screen flex items-center justify-center px-4"
        >
            <div className="max-w-3xl text-center">
                {/* Greeting and name */}
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    Hi, I'm <span className="text-blue-400">Sandip Deshmukh</span>
                </h1>

                {/* Subtitle or role */}
                <p className="text-xl sm:text-2xl text-gray-400 mb-6">
                    Senior Software Engineer | Full-Stack Web Developer
                </p>

                {/* Short description */}
                <p className="text-md text-gray-500 mb-8">
                    Versatile and innovative Senior Software Engineer with over three years of experience in full-stack web development and advanced multimedia applications.
                </p>

                {/* Call-to-action button */}
                <a
                    href="/projects"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-semibold"
                >
                    View My Work
                </a>

            </div>
        </section>
    );
};

export default Hero;
