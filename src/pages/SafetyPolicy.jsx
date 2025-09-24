import SEO from '../components/SEO.jsx'
export default function SafetyPolicy() {
  return (
    <section className="feature">
      <div className="container">
        <SEO
          title="Safety Policy – Innosim Design AB"
          description="Our approach to risk management, regulatory compliance, and continuous improvement in aviation safety."
          path="/safety-policy"
        />
        <h1>Safety policy</h1>
        <p className="lead">Safety first. We maintain high standards across operations to protect employees, customers, and partners.</p>

        <h2 style={{marginTop:16}}>Safety first</h2>
        <p>
          Our policy outlines our approach to risk management, regulatory compliance, and continuous improvement in aviation safety. These principles guide everyday decisions and long-term planning.
        </p>
        <p style={{marginTop:12}}>
          Click below to download the full safety policy document.
        </p>
        <p><a className="button" href="#" onClick={(e)=>e.preventDefault()}>Download safety policy (PDF)</a></p>
      </div>
    </section>
  )
}
