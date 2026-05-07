import { useState, useRef, useEffect } from 'react'
import './MusicPlayer.css'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
    }
  }, [])

  return (
    <div className="music-player">
      <button onClick={togglePlay} className="music-button">
        {isPlaying ? '🔊' : '🎵'}
      </button>
      <span className="music-text">{isPlaying ? 'Musik Sedang Dimainkan...' : 'Klik untuk Mainkan Musik'}</span>
      <audio 
        ref={audioRef}
        loop
      >
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default MusicPlayer
