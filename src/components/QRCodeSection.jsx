import { QRCodeSVG } from 'qrcode.react'
import './QRCodeSection.css'

function QRCodeSection() {
  const networkUrl = window.location.origin

  return (
    <section className="qr-section" id="qr">
      <h3>Scan QR Code Ini</h3>
      <p className="qr-subtitle">Akses website Lovescape dengan mudah dari ponselmu!</p>
      <div className="qr-container">
        <QRCodeSVG 
          value={networkUrl} 
          size={250}
          level="H"
          includeMargin={true}
        />
      </div>
      <p className="qr-url">Atau kunjungi: <strong>{networkUrl}</strong></p>
    </section>
  )
}

export default QRCodeSection
