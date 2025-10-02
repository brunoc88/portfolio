import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Puedes encontrarme y contactarme en<br />las siguientes plataformas</h2>
      
      <div className="contact-list">
        <div className="contact-item">
          <img src="/gmail.png" alt="gmail" />
          <span>brunocerutti88@gmail.com</span>
        </div>

        <div className="contact-item">
          <img src="/github.png" alt="github" />
          <a href="https://github.com/brunoc88" target="_blank" rel="noopener noreferrer">
            github.com/brunoc88
          </a>
        </div>

        <div className="contact-item">
          <img src="/linkedin.png" alt="linkedin" />
          <a href="https://www.linkedin.com/in/bruno-cerutti-a0214a208/" target="_blank" rel="noopener noreferrer">
            Bruno Cerutti
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
