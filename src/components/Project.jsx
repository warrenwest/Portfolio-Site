// TODO: Make A single Project component that will be used multiple times in the Portfolio section

export default function Project({
    title,
    description,
    deployedLink,
    githubLink,
}) {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                View Deployed App
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                View GitHub Repo
            </a>
        </div>
    );
};