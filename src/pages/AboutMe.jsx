// TODO: Create an about me page that includes a picture of the developer and a short bio
export default function AboutMe() {
    return (
        <div className="about-me-page">
            <h1>About Me</h1>
            <img src="path/to/your/image.jpg" alt="Developer" className="developer-image" />
            <p className="bio">
                Hello! My name is Warren West, and I'm an aspiring web developer. I enjoy learning about new tech and building interesting looking websites. 
                I have a background in art, specifically animation, and I think incorporating those elements into my web design makes my work stand out.
            </p>
        </div>
    );
}