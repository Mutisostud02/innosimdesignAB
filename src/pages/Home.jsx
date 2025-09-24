import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
export default function Home() {
  return (
    <>
      <SEO
        title="Innosim Design AB – Propeller Services"
        description="Certified propeller maintenance, repair, overhaul, field services, and spare parts for Fokker 50, Saab 340, Dash 8 and more."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Innosim Design AB",
              "url": "https://innosimdesignab.com/",
              "logo": "https://innosimdesignab.com/logo.svg",
              "email": "info@innosimdesignab.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hangarvägen 4, Box 57",
                "addressLocality": "Malmö‑Sturup",
                "postalCode": "239 32",
                "addressCountry": "SE"
              }
            },
            {
              "@type": "WebSite",
              "name": "Innosim Design AB",
              "url": "https://innosimdesignab.com/"
            }
          ]
        }}
      />
      <section className="hero">
        <div className="container">
          <h1>Know-how backed by experience</h1>
          <p className="lead">
            Our air propeller shop specializes in maintenance and repair, keeping aircraft like the Fokker 50, Saab 340 and Dash 8 in top condition. With flexible on-field support, we help minimize downtime and ensure reliable performance in the air.
          </p>
          <p><a href="#services" className="button primary">Discover our expertise</a></p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our services</h2>
          <p className="section-intro">Certified technicians delivering comprehensive propeller care in-shop and in the field.</p>
          <div className="cards">
            <article id="mro" className="card">
              <h3>Full MRO capability</h3>
              <p>Complete propeller care, from inspections to repairs, ensuring top performance and reliability—whenever and wherever you need it.</p>
              <Link to="/our-services/full-mro-capability" className="link">Learn more</Link>
            </article>
            <article id="field" className="card">
              <h3>Field services</h3>
              <p>On-site troubleshooting and maintenance to reduce aircraft downtime and return to service quickly.</p>
              <Link to="/our-services/field-services" className="link">Learn more</Link>
            </article>
            <article id="parts" className="card">
              <h3>Spare parts</h3>
              <p>Reliable sourcing of OEM and approved components to keep your fleet mission-ready.</p>
              <Link to="/our-services/spare-parts" className="link">Learn more</Link>
            </article>
          </div>
        </div>
      </section>

      <section id="safety" className="feature">
        <div className="container">
          <h2>Safety first</h2>
          <p>We uphold rigorous safety standards across our operations, protecting our employees, customers, and partners.</p>
          <a className="button" href="#" onClick={(e)=>e.preventDefault()}>Download Safety Policy (PDF)</a>
        </div>
      </section>

      <section id="approvals" className="feature muted">
        <div className="container">
          <h2>Approved MRO</h2>
          <p>We maintain current approvals and certifications aligned with industry standards.</p>
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="container">
          <h2>How can we help you?</h2>
          <p>
            We specialize in the repair and maintenance of aircraft propellers. Whether you need urgent assistance or want to schedule a repair, our team is ready to support you with tailored solutions.
          </p>
          <a href="/contact" className="button primary">Contact us</a>
        </div>
      </section>

      {/* Logo/image strip just above the footer */}
      <section className="logo-strip">
        <div className="container">
          <h3 style={{marginBottom: 12}}>Patnering Companies</h3>
          <div className="logos" aria-label="Partner logos">
            <img src="/home/airest-logo-768x214.webp" alt="Airest logo" loading="lazy" />
            <img src="/home/Fokker_Logo_2012.svg-300x188.png.webp" alt="Fokker logo" loading="lazy" />
            <img src="/home/cropped-TAMlogo-3.png.webp" alt="TAM logo" loading="lazy" />
            <img src="/home/logo_a3.webp" alt="A3 logo" loading="lazy" />
            <img src="/home/Group-14.png.webp" alt="Partner logo" loading="lazy" />
            <img src="/home/images-1.png.webp" alt="Partner logo" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  )
}
