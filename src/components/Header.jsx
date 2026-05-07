import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>❤️ Lovescape</h1>
      </div>
      <nav className="nav">
        <a href="#home" className="nav-link">Beranda</a>
        <a href="#gifts" className="nav-link">Hadiah</a>
        <a href="#qr" className="nav-link">QR Code</a>
        <a href="#about" className="nav-link">Tentang</a>
        <a href="#contact" className="nav-link">Kontak</a>
      </nav>
    </header>
  )
}

export default Header
