import SEO from '../components/SEO.jsx'
export default function Capability() {
  return (
    <section className="feature">
      <div className="container">
        <SEO
          title="Capability List – Innosim Design AB"
          description="Authorized propeller maintenance and repair capabilities. Download the full capability list."
          path="/capability-list"
        />
        <h1>Capability list</h1>
        <p className="lead">Discover the scope of our authorized services. Our capability list outlines what we are certified and equipped to handle.</p>

        <h2 style={{marginTop:16}}>Our certified capabilities</h2>
        <p>
          From routine inspections to specialized propeller repairs, our team operates under the required certifications and processes
          to meet stringent industry standards.
        </p>
        <p style={{marginTop:12}}>
          For the complete list of capabilities, download the PDF below.
        </p>
        <p><a className="button" href="#" onClick={(e)=>e.preventDefault()}>Download capability list (PDF)</a></p>
      </div>
    </section>
  )
}
