
export default function SectionTitle({ eyebrow, title, text, align="center", light=false }) {
  return <div className={`section-title ${align} ${light ? "light" : ""}`}>
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-lead">{text}</p>}
  </div>
}
