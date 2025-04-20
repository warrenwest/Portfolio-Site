export default function Project({ title, description, image, deployedLink, githubLink }) {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <p>{description}</p>
            {image && <img src={image} alt={`${title} screenshot`} />}
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                View Deployed App
            </a>
            <br />
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                View GitHub Repo
            </a>
        </div>
    );
};