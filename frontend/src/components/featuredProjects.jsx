import '../portfolio.css'

const projects = [
    { id: 1, title: 'Project 1', description: 'Short description of this project goes here.' },
    { id: 2, title: 'Project 2', description: 'Short description of this project goes here.' },
    { id: 3, title: 'Project 3', description: 'Short description of this project goes here.' },
    { id: 4, title: 'Project 4', description: 'Short description of this project goes here.' },
    { id: 5, title: 'Project 5', description: 'Short description of this project goes here.' },
]

function FeaturedProjects() {
    return (
        <section className="featured">
            <h2 className="featured-heading">Featured Projects</h2>
            <div
                className="featured-track"
                role="region"
                aria-label="Featured projects"
                tabIndex={0}
            >
                {projects.map((project) => (
                    <article className="featured-card" key={project.id}>
                        <div className="featured-shot" aria-hidden="true" />
                        <h3 className="featured-title">{project.title}</h3>
                        <p className="featured-desc">{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProjects