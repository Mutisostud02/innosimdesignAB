import SEO from '../components/SEO.jsx'
export default function FullMRO() {
  return (
    <section className="feature">
      <div className="container">
        <SEO
          title="Full MRO Capability – Innosim Design AB"
          description="End-to-end propeller maintenance, repair, overhaul, balancing and testing by certified technicians."
          path="/our-services/full-mro-capability"
        />
        <h1>Full MRO capability</h1>
        <p className="lead">End-to-end propeller maintenance, repair, and overhaul to keep your fleet mission-ready.</p>
        <div className="feature-split">
          <div>
            <h2 style={{marginTop:0}}>Precision and reliability</h2>
            <p>
              Our certified technicians perform inspections, repairs, balancing and functional tests following approved data. We focus on reducing turnaround
              time while maintaining rigorous quality standards.
            </p>
          </div>
          <figure className="feature-visual" aria-hidden="true">
            <img
              src="/home/prop2.jpg"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <h2 style={{marginTop:16}}>Complete propeller care</h2>
        <p>
          We provide inspections, repairs, overhauls, balancing, and functional testing following approved data and processes. Our workflow aims to reduce turnaround times while maintaining consistent quality.
        </p>
        <ul className="bullets" style={{marginTop:10}}>
          <li>Incoming inspection and evaluation</li>
          <li>Repair and overhaul of hubs, blades, and governors</li>
          <li>Non-destructive testing (as applicable)</li>
          <li>Assembly, balancing, and functional checks</li>
          <li>Documentation and release to service</li>
        </ul>

        <p style={{marginTop:16}}>Need assistance with a specific propeller model? <a className="link" href="/contact">Contact us</a>.</p>
      </div>
    </section>
  )
}
