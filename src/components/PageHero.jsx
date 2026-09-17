
export default function PageHero({ eyebrow, title, text, image = "/Hero.png" }) {
  return <section className="page-hero">
    <img src={image} alt="" className="page-hero-image" />
    <div className="page-hero-overlay" />
    <div className="page-hero-content container">
      <p className="eyebrow light">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </section>
}
