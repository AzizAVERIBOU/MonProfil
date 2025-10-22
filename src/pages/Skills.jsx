import './Skills.css'

function Skills() {
  const skillsData = [
    {
      category: 'Langages de programmation',
      icon: '💻',
      skills: ['Python', 'Java', 'C#', 'JavaScript', 'PHP', 'Assembleur']
    },
    {
      category: 'Développement Web',
      icon: '🌐',
      skills: ['React', 'Django', 'HTML5', 'CSS3']
    },
    {
      category: 'Frameworks & Technologies',
      icon: '⚙️',
      skills: ['.NET', 'WPF', 'MySQL']
    },
    {
      category: 'Outils de développement',
      icon: '🛠️',
      skills: ['Visual Studio', 'VS Code', 'Git', 'GitHub', 'VS Paradigm', 'Dia']
    },
    {
      category: 'Outils Bureautiques & Autres',
      icon: '📊',
      skills: ['Word', 'Excel', 'Moodle', 'Cloud', 'OneDrive', 'OBS Studio']
    },
    {
      category: 'Langues',
      icon: '🌍',
      skills: ['Français (langue maternelle)', 'Anglais (intermédiaire)']
    }
  ]

  return (
    <div className="skills">
      <div className="container">
        <h1 className="page-title">Mes Compétences</h1>
        <p className="page-subtitle">
          Un éventail de compétences techniques et transversales pour concrétiser vos projets
        </p>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <span className="skill-icon">{category.icon}</span>
                <h2>{category.category}</h2>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

