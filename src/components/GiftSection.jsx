import './GiftSection.css'

const gifts = [
  {
    id: 1,
    name: "Buket Bunga Mawar",
    price: "Rp 250.000",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20red%20rose%20bouquet%2C%20romantic%20gift%2C%20love%20theme&image_size=square"
  },
  {
    id: 2,
    name: "Cokelat Valentine",
    price: "Rp 150.000",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=heart%20shaped%20chocolates%20in%20gift%20box%2C%20romantic%20present&image_size=square"
  },
  {
    id: 3,
    name: "Teddy Bear Romantis",
    price: "Rp 300.000",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cute%20teddy%20bear%20with%20heart%2C%20romantic%20gift&image_size=square"
  },
  {
    id: 4,
    name: "Kotak Permintaan Maaf",
    price: "Rp 450.000",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20gift%20box%20with%20apology%20theme%2C%20pink%20and%20red%20decoration&image_size=square"
  }
]

function GiftSection() {
  return (
    <section className="gift-section" id="gifts">
      <h3>Pilih Hadiah Terbaik</h3>
      <p className="section-subtitle">Hadiah spesial untuk menyampaikan maafmu dengan penuh cinta</p>
      <div className="gifts-grid">
        {gifts.map(gift => (
          <div key={gift.id} className="gift-card">
            <img src={gift.image} alt={gift.name} className="gift-image" />
            <div className="gift-info">
              <h4>{gift.name}</h4>
              <p className="gift-price">{gift.price}</p>
              <button className="buy-button">Beli Sekarang</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GiftSection
