import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import GiftSection from './components/GiftSection'
import QRCodeSection from './components/QRCodeSection'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <LoveLetter />
      <GiftSection />
      <QRCodeSection />
      <MusicPlayer />
      <Footer />
    </div>
  )
}

export default App
