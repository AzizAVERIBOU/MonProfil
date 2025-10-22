import './CV.css'

function CV() {
  return (
    <div className="cv">
      <div className="cv-viewer-container">
        <div className="cv-header-simple">
          <h1 className="page-title">Mon Curriculum Vitae</h1>
          <p className="cv-intro">
            Découvrez mon parcours complet, mes expériences professionnelles et mes compétences détaillées.
          </p>
        </div>

        {/* Aperçu du CV */}
        <div className="cv-preview">
          <div className="cv-preview-notice">
            <span className="preview-icon">📄</span>
            <h3>CV Complet disponible en PDF</h3>
            <p>Consultez ou téléchargez mon curriculum vitae au format PDF</p>
          </div>
          
          
        </div>

        {/* Boutons d'action */}
        <div className="cv-actions">
          <a 
            href="/mon cv A.W.A.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cv-action-btn cv-view-btn"
          >
            <span className="btn-icon">📄</span>
            Voir le CV
          </a>
          <a 
            href="/mon cv A.W.A.pdf" 
            download="CV_Aziz_AVERIBOU.pdf" 
            className="cv-action-btn cv-download-btn"
          >
            <span className="btn-icon">📥</span>
            Télécharger le CV
          </a>
        </div>

        {/* Informations de contact rapide */}
        <div className="cv-contact-quick">
          <div className="contact-quick-header">
            <span className="contact-quick-icon">💬</span>
            <div>
              <h3>Intéressé par mon profil ?</h3>
              <p>Discutons de vos projets et des opportunités de collaboration</p>
            </div>
          </div>
          
          <div className="quick-contact-grid">
            <a href="mailto:azizaveribou6123@gmail.com" className="quick-contact-card">
              <div className="quick-card-icon">📧</div>
              <div className="quick-card-content">
                <span className="quick-card-label">Email</span>
                <span className="quick-card-value">azizaveribou6123@gmail.com</span>
              </div>
            </a>
            
            <a href="tel:+14182617814" className="quick-contact-card">
              <div className="quick-card-icon">📱</div>
              <div className="quick-card-content">
                <span className="quick-card-label">Téléphone</span>
                <span className="quick-card-value">(418) 261-7814</span>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/aziz-averibou-51b782323/" target="_blank" rel="noopener noreferrer" className="quick-contact-card">
              <div className="quick-card-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="quick-card-content">
                <span className="quick-card-label">LinkedIn</span>
                <span className="quick-card-value">Aziz AVERIBOU</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV

