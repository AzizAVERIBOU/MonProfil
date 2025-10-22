import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Description du projet à venir...',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '💻',
      link: '#'
    },
    {
      title: 'Projet 2',
      description: 'Description du projet à venir...',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      image: '🚀',
      link: '#'
    },
    {
      title: 'Projet 3',
      description: 'Description du projet à venir...',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      image: '⚡',
      link: '#'
    },
    {
      title: 'Projet 4',
      description: 'Description du projet à venir...',
      technologies: ['JavaScript', 'API REST', 'CSS3'],
      image: '🎯',
      link: '#'
    },
    {
      title: 'Projet 5',
      description: 'Description du projet à venir...',
      technologies: ['C#', '.NET', 'WPF'],
      image: '🔧',
      link: '#'
    },
    {
      title: 'Projet 6',
      description: 'Description du projet à venir...',
      technologies: ['React', 'Firebase', 'Tailwind'],
      image: '🌟',
      link: '#'
    }
  ]

  return (
    <div className="projects">
      <div className="container">
        <h1 className="page-title">Mes Projets</h1>
        <p className="page-subtitle">
          Découvrez quelques-uns de mes projets récents
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-btn" target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

