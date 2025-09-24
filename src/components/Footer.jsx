export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-brand">Innosim Design AB</h4>
            <p className="footer-muted">Propeller services and support</p>
          </div>
          <div className="footer-col">
            <h5>Address</h5>
            <address className="footer-address">
              Hangar<br/>
              Hangarvägen 4<br/>
              Box 57<br/>
              239 32 Malmö‑Sturup
            </address>
            <p className="footer-muted" style={{marginTop:8}}>
              General inquiries: <a className="link" href="mailto:info@innosimdesignab.com">info@innosimdesignab.com</a>
            </p>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <p className="footer-muted">
              Ludvig Odin — Technical Director and Asset Manager<br/>
              <a className="link" href="mailto:ludvig.odin@innosimab.com">ludvig.odin@innosimab.com</a><br/>
              +46 768 67 01 45
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Innosim Design AB 2020cc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
