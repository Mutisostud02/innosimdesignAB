import SEO from '../components/SEO.jsx'
export default function FieldServices() {
  return (
    <section className="feature">
      <div className="container">
        <SEO
          title="Field Services – Innosim Design AB"
          description="On‑site propeller troubleshooting, inspections, adjustments, and checks to minimize aircraft downtime."
          path="/our-services/field-services"
        />
        <h1>Field services</h1>
        <p className="lead">On‑site troubleshooting and maintenance to reduce downtime and get your aircraft back in service quickly.</p>
        <div className="feature-split reverse">
          <div className="feature-content">
            <h2 style={{marginTop:0}}>On‑site when it matters</h2>
            <p>
              Our mobile technicians support you on location with inspections, adjustments, and post‑maintenance checks. We coordinate closely with your
              operations to minimize disruption and return your aircraft to service quickly.
            </p>
          </div>
          <figure className="feature-visual" aria-hidden="true">
            <img
              src="/home/prop3.jpg"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <h2 style={{marginTop:16}}>Flexible support where you need it</h2>
        <p>
          Our mobile team assists with inspections, repairs, adjustments, and post‑maintenance checks on location. We coordinate closely with your operations to minimize disruption.
        </p>
        <ul className="bullets" style={{marginTop:10}}>
          <li>On‑wing inspections and assessments</li>
          <li>Minor repairs and adjustments on site</li>
          <li>Balancing and functional checks</li>
          <li>Coordination for component exchanges</li>
        </ul>

        <p style={{marginTop:16}}>Need urgent assistance? <a className="link" href="/contact">Contact us</a>.</p>
      </div>
    </section>
  )
}
