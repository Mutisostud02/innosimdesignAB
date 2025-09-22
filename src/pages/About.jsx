export default function About() {
  return (
    <section className="feature">
      <div className="container">
        <h1>About us</h1>
        <p className="lead">We combine decades of hands‑on experience with modern processes to deliver dependable propeller services.</p>

        <h2 style={{marginTop:16}}>Our commitment</h2>
        <p>
          Quality, safety, and sustainability guide everything we do—from scheduled maintenance to complex repairs. Our certified team and structured processes
          ensure consistent results and minimized downtime for your fleet.
        </p>

        <div style={{display:'grid', gap:12, marginTop:16}}>
          <div>
            <h3>Sustainability</h3>
            <p>We operate with a continuous‑improvement mindset and follow the substitution principle and waste hierarchy in daily practice.</p>
            <p><a className="button" href="/sustainability">Read our sustainability approach</a></p>
          </div>
          <div>
            <h3>Safety policy</h3>
            <p>Safety first—our policy outlines risk management, compliance, and ongoing improvement in aviation safety.</p>
            <p><a className="button" href="/safety-policy">View our safety policy</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
