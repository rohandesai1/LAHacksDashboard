
export default function Project({ title, description, image, externalLink }) {
    return (
        <div>
        <div className="project">
            <div className="projectTitle"> <a href={externalLink}  target="_blank" rel="noreferrer">{title}</a></div>
            <div className="projectDescription">{description}</div>
            <div className="projectImage">
                <img src={image} alt="projectimage"/> 
            </div>
        </div>
        </div>
    );
}
