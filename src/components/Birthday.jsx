import { useState, useEffect } from 'react'
import './Birthday.css'

function Birthday() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setShowConfetti(true)
  }, [])

  const pages = [
    {
      id: 1,
      title: "Halo, Jemboet 🫂",
      content: "Aku disini untuk kamu. Tidak apa-apa untuk menangis.",
      emoji: "🤗"
    },
    {
      id: 2,
      title: "Kamu Tidak Sendiri 💙",
      content: "Setiap air mata yang jatuh, aku disini mendampingimu.",
      emoji: "🌊"
    },
    {
      id: 3,
      title: "Kamu Kuat Banget! 💪",
      content: "Sudah sejauh ini kamu bertahan. Itu luar biasa!",
      emoji: "🌸"
    },
    {
      id: 4,
      title: "Semuanya Akan Baik-baik Saja 🌈",
      content: "Setelah hujan, akan ada pelangi. Aku percaya kamu!",
      emoji: "✨"
    },
    {
      id: 5,
      title: "Kamu Berharga Banget! ✨",
      content: "Dunia ini lebih indah karena ada kamu di dalamnya.",
      emoji: "💫"
    }
  ]

  const nextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const restart = () => {
    setCurrentPage(1)
  }

  return (
    <div className="birthday-container">
      {showConfetti && (
        <div className="confetti">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="confetti-piece" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                background: ['#ff4757', '#ffa502', '#fffa65', '#2ed573', '#1e90ff', '#ff6b81'][Math.floor(Math.random() * 6)]
              }}
            />
          ))}
        </div>
      )}

      <div className="birthday-card">
        <div className="page-indicator">
          {pages.map(page => (
            <div 
              key={page.id} 
              className={`dot ${currentPage === page.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(page.id)}
            />
          ))}
        </div>

        <div className="page-content">
          <div className="emoji-bounce">{pages[currentPage - 1].emoji}</div>
          <h1 className="birthday-title">{pages[currentPage - 1].title}</h1>
          <p className="birthday-text">{pages[currentPage - 1].content}</p>
        </div>

        <div className="buttons">
          {currentPage > 1 && (
            <button className="btn btn-prev" onClick={prevPage}>← Sebelumnya</button>
          )}
          
          {currentPage < pages.length ? (
            <button className="btn btn-next" onClick={nextPage}>Selanjutnya →</button>
          ) : (
            <button className="btn btn-restart" onClick={restart}>🔄 Ulang Lagi</button>
          )}
        </div>
      </div>

      <div className="floating-balloon balloon-1">🎈</div>
      <div className="floating-balloon balloon-2">🎈</div>
      <div className="floating-balloon balloon-3">🎈</div>
    </div>
  )
}

export default Birthday
