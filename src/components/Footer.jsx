import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>❤️ Lovescape</h3>
          <p>Website permintaan maaf romantis terbaik untukmu</p>
        </div>
        <div className="footer-links">
          <h4>Tautan Cepat</h4>
          <a href="#home">Beranda</a>
          <a href="#gifts">Hadiah</a>
          <a href="#about">Tentang</a>
          <a href="#contact">Kontak</a>
        </div>
        <div className="footer-contact">
          <h4>Kontak</h4>
          <p>Email: hello@lovescape.id</p>
          <p>Telepon: +62 812-3456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Lovescape. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
