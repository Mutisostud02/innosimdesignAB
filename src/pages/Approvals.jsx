import SEO from '../components/SEO.jsx'
export default function Approvals() {
  return (
    <section className="feature">
      <div className="container">
        <SEO
          title="Approvals & Certificates – Innosim Design AB"
          description="Current approvals and certificates supporting our aircraft propeller maintenance and repair services."
          path="/approvals-and-certificates"
        />
        <h1>Approvals & certificates</h1>
        <p className="lead">Certified excellence you can trust. We operate under current approvals and certifications and perform services to the highest industry standards.</p>

        <h2 style={{marginTop:16}}>Certified excellence you can trust</h2>
        <p>
          Our quality and safety management ensure compliance with international regulations for aircraft maintenance and repair. From routine tasks to advanced repairs, our approvals back consistent, reliable work.
        </p>

        <div style={{display:'grid', gap:12, marginTop:16}}>
          <div>
            <h3>We have the following approvals</h3>
            <ul className="bullets">
              <li>Maintenance organization approval (insert authority and ID)</li>
              <li>OEM-specific repair/process approvals (as applicable)</li>
            </ul>
          </div>
          <div>
            <h3>We have the following certificates</h3>
            <ul className="bullets">
              <li><a className="link" href="#" onClick={(e)=>e.preventDefault()}>MRO certificate (PDF)</a></li>
              <li><a className="link" href="#" onClick={(e)=>e.preventDefault()}>Authority approval (PDF)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
