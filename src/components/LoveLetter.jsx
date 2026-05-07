import './LoveLetter.css'

function LoveLetter() {
  const memories = [
    {
      id: 1,
      title: "Pertama Bertemu",
      date: "15 Januari 2025",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20first%20date%20couple%20in%20cafe%2C%20soft%20pink%20lighting%2C%20love%20moment&image_size=square",
      message: "Senyummu saat itu masih teringat jelas di hatiku..."
    },
    {
      id: 2,
      title: "Liburan Bersama",
      date: "10 Juli 2025",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=couple%20on%20vacation%20at%20beach%2C%20sunset%2C%20romantic%20moment&image_size=square",
      message: "Setiap langkah bersamamu adalah kebahagiaan terindah..."
    },
    {
      id: 3,
      title: "Anniversary Pertama",
      date: "15 Januari 2026",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20anniversary%20dinner%2C%20candles%2C%20heart%20shape%2C%20couple%20in%20love&image_size=square",
      message: "Setahun bersama kamu adalah waktu terindah dalam hidupku..."
    }
  ]

  return (
    <section className="love-letter" id="about">
      <div className="letter-header">
        <h2>Untuk Kamu, Sayangku ❤️</h2>
        <p className="date">8 Mei 2026</p>
      </div>
      
      <div className="letter-content">
        <div className="message-box">
          <p className="love-message">
            Terima kasih sudah menjadi bagian dari hidupku. Setiap detik bersamamu adalah anugerah terindah yang pernah aku miliki. 
            Maaf jika pernah ada kata-kata yang menyakiti hatimu. Aku benar-benar mencintaimu dan ingin selalu bersamamu selamanya.
          </p>
        </div>

        <h3 className="memories-title">Kenangan Kita Bersama 📸</h3>
        
        <div className="memories-grid">
          {memories.map(memory => (
            <div key={memory.id} className="memory-card">
              <img src={memory.image} alt={memory.title} className="memory-image" />
              <div className="memory-info">
                <h4>{memory.title}</h4>
                <p className="memory-date">{memory.date}</p>
                <p className="memory-message">{memory.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="closing">
          <p className="closing-message">
            Aku mencintaimu lebih dari kata-kata yang bisa aku ungkapkan.
          </p>
          <p className="sender">Selamanya, ❤️</p>
        </div>
      </div>
    </section>
  )
}

export default LoveLetter
