import Project from "../components/Project";

export default function Portfolio() {
    return (
        <div className="portfolio-page">
            <h1>Portfolio</h1>
            <div className="projects-grid">
                <Project title="Next Venue" description="MERN Stack" image="" deployedLink="https://next-venue.onrender.com/" githubLink="https://github.com/chase-jefferson/next-venue" />
                <Project title="Vehicle Builder" description="TypeScript" image="" deployedLink="" githubLink="https://github.com/warrenwest/vehicle-builder" />
                <Project title="Quizzy" description="HTML, CSS, Javascript" image="./src/assets/quizzy.PNG" deployedLink="https://haiash.github.io/gwu-project-1-quiz/" githubLink="https://github.com/HaiAsh/gwu-project-1-quiz" />
                <Project title="Project 4" description="" image="" deployedLink="" githubLink="" />
                <Project title="Project 5" description="" image="" deployedLink="" githubLink="" />
                <Project title="Project 6" description="" image="" deployedLink="" githubLink="" />
            </div>
        </div>
    );
}