//TODO: Create a portfolio page that shows six applications that the developer has created with links to each of the deployed apps and the corresponding GitHub repos
export default function Portfolio() {
    return (
        <div className="portfolio-page">
            <h1>Portfolio</h1>
            <div className="projects-grid">
                {/* Add your project components here */}
                <Project title="Project 1" />
                <Project title="Project 2" />
                <Project title="Project 3" />
                <Project title="Project 4" />
                <Project title="Project 5" />
                <Project title="Project 6" />
            </div>
        </div>
    );
}