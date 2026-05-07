import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Katakan Maaf dengan Sepenuh Hati ❤️</h2>
        <p>Hadiah permintaan maaf yang romantis dan menyentuh hati untuk membuatnya memaafkanmu</p>
        <button className="cta-button">Lihat Hadiah Sekarang</button>
      </div>
      <div className="hero-image floating">
        <img 
          src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20apology%20gift%20with%20flowers%20and%20heart%20shape%2C%20soft%20pink%20background%2C%20love%20theme&image_size=square_hd" 
          alt="Romantic Gift" 
        />
      </div>
    </section>
  )
}

export default Hero
