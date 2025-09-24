import SEO from '../components/SEO.jsx'
export default function Capability() {
  return (
    <section className="feature">
      <div className="container">
        <SEO
          title="Capability List – Innosim Design AB"
          description="Authorized propeller maintenance and repair capabilities."
          path="/capability-list"
        />
        <h1>Capability list</h1>
        <p className="lead">Discover the scope of our authorized services. Our capability list outlines what we are certified and equipped to handle.</p>

        <h2 style={{marginTop:16}}>Our certified capabilities</h2>
        <p>
          From routine inspections to specialized propeller repairs, our team operates under the required certifications and processes
          to meet stringent industry standards.
        </p>
        
      </div>
    </section>
  )
}
