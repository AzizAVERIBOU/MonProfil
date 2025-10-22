import './About.css'

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">À propos de moi</h1>
        
        <div className="about-content">
          <div className="about-image-container">
            <img src="/image.jpg" alt="Aziz AVERIBOU" className="about-image" />
          </div>
          
          <div className="about-text">
            <h2>Qui suis-je ?</h2>
            <p>
              Étudiant en informatique à l'UQAR (Campus de Lévis), je combine formation académique de qualité 
              et expérience terrain acquise dans divers secteurs au Québec. Ce qui me définit ? 
              Un engagement sans compromis envers l'excellence, une curiosité insatiable pour les nouvelles 
              technologies et une capacité d'adaptation forgée par des expériences variées.
            </p>
            <p>
              Au-delà des compétences techniques, j'apporte une compréhension concrète des besoins clients 
              grâce à mon expérience en service à la clientèle, production et intervention sociale. 
              Cette polyvalence me permet d'aborder chaque projet avec une vision 360°.
            </p>
            
            <h2>Mon parcours</h2>
            <p>
              Mon histoire commence au Burkina Faso où j'ai forgé mes bases scientifiques à travers les classes 
              préparatoires aux grandes écoles. L'arrivée au Québec a marqué un tournant : immersion dans un 
              nouvel environnement, adaptation à un système d'enseignement différent, et découverte du monde 
              professionnel québécois. Ces défis ont aiguisé ma résilience et ma capacité à exceller dans la diversité.
            </p>
            <p>
              Aujourd'hui, je maîtrise un éventail de technologies qui me permettent de concrétiser n'importe quelle 
              vision : du back-end au front-end, de l'algorithmique pure à l'interface utilisateur. 
              Mais plus que des langages de programmation, j'ai appris à coder des solutions qui font la différence.
            </p>
            
            <h2>Expérience professionnelle</h2>
            <p>
              J'ai travaillé dans divers domaines incluant le service à la clientèle chez MAXI, 
              la production chez TEKNION, et actuellement comme intervenant en soutien et sécurité 
              au CISSS Chaudière-Appalaches. Ces expériences m'ont permis de développer mon sens 
              de l'organisation, ma patience et mes aptitudes au travail en équipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

