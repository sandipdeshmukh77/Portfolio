
import Education from "../components/Education";
import Hero from "../components/Hero";
import Skills from "../components/Skills";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <Skills />
            <Education />
        </div>
    );
};

export default Home;
