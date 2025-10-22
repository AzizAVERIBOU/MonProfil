import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false, message: '' })

    try {
      const result = await emailjs.sendForm(
        'service_uqdmvud',
        'template_0ot2wo2',
        form.current,
        'Ba05FNSch35m6QKwC'
      )

      console.log('Email envoyé avec succès:', result.text)
      setStatus({
        loading: false,
        success: true,
        error: false,
        message: '✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
      })
      setFormData({ name: '', email: '', message: '' })
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' })
      }, 5000)

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: '❌ Une erreur s\'est produite. Veuillez réessayer ou me contacter directement par email.'
      })
    }
  }

  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title">Me Contacter</h1>
        <p className="page-subtitle">
          N'hésitez pas à me contacter pour toute question ou collaboration
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Restons en contact</h2>
            <p className="contact-intro">
              Vous avez un projet en tête ou une opportunité à discuter ? 
              Je serais ravi d'échanger avec vous !
            </p>

            <div className="contact-methods">
              <a href="mailto:azizaveribou6123@gmail.com" className="contact-card">
                <div className="contact-card-icon">📧</div>
                <div className="contact-card-content">
                  <h3>Email</h3>
                  <p>azizaveribou6123@gmail.com</p>
                  <span className="contact-action">M'envoyer un email →</span>
                </div>
              </a>

              <a href="tel:+14182617814" className="contact-card">
                <div className="contact-card-icon">📱</div>
                <div className="contact-card-content">
                  <h3>Téléphone</h3>
                  <p>(418) 261-7814</p>
                  <span className="contact-action">M'appeler →</span>
                </div>
              </a>

              <div className="contact-card location-card">
                <div className="contact-card-icon">📍</div>
                <div className="contact-card-content">
                  <h3>Localisation</h3>
                  <p>Lévis, Québec<br/>Canada</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>Retrouvez-moi sur</h3>
              <div className="social-cards">
                <a href="https://github.com/AzizAVERIBOU" target="_blank" rel="noopener noreferrer" className="social-card">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/aziz-averibou-51b782323/" target="_blank" rel="noopener noreferrer" className="social-card">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>Envoyez-moi un message</h2>
              <p>Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.</p>
            </div>

            <div className="form-body">
              <div className="form-group">
                <label htmlFor="name">
                  <span className="label-icon">👤</span>
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom et prénom"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <span className="label-icon">📧</span>
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre.email@exemple.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <span className="label-icon">💬</span>
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Parlez-moi de votre projet, de votre besoin ou de l'opportunité que vous souhaitez partager..."
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-message ${status.success ? 'success' : 'error'}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={status.loading}>
                {status.loading ? (
                  <>
                    <span className="btn-icon spinner">⏳</span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">✉️</span>
                    Envoyer le message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

