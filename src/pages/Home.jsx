import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <img src="/image.jpg" alt="Aziz AVERIBOU" className="hero-image" />
          <h1 className="hero-title">Bonjour, je suis <span className="highlight">Aziz AVERIBOU</span></h1>
          <p className="hero-subtitle">Étudiant en Informatique | UQAR - Campus de Lévis</p>
          <p className="hero-description">
            Je crée des solutions numériques qui allient performance technique et expérience utilisateur. 
            Passionné par l'innovation et animé par le défi de transformer des concepts en réalité.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Me contacter</a>
            <a href="#projects" className="btn btn-secondary">Voir mes projets</a>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <h2>Pourquoi travailler avec moi ?</h2>
          <p>
            Alliant rigueur académique et expérience professionnelle diversifiée, je combine des compétences techniques solides 
            avec des qualités humaines essentielles : engagement, adaptabilité et esprit d'équipe. 
            Mon parcours au Québec m'a permis de développer une approche pragmatique et orientée résultats. 
            Découvrez comment mes compétences peuvent apporter de la valeur à vos projets.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home

