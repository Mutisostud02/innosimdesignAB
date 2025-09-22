import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="feature">
      <div className="container">
        <h1>Contact us</h1>
        <p className="lead">With strategically located offices and workshops, we deliver high‑quality propeller services where you need them.</p>

        <div style={{display:'grid', gap:16, marginTop:16}}>
          <div>
            <h3>Malmö</h3>
            <p>Hangar<br/>Hangarvägen 8<br/>Box 57<br/>239 32 Malmö‑Sturup</p>
            <p>
              Ludvig Odin — Technical & Asset Manager<br/>
              <a className="link" href="mailto:ludvig.odin@innosim.com">ludvig.odin@innosim.com</a><br/>
              +46 768 67 01 45
            </p>
          </div>
        </div>

        <h2 style={{marginTop:20}}>Send us a message</h2>
        {submitted ? (
          <p role="status">Thank you! We will be in touch shortly.</p>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="grid">
              <label>
                <span>Name</span>
                <input required type="text" name="name" />
              </label>
              <label>
                <span>Email</span>
                <input required type="email" name="email" />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea required name="message" rows="5"></textarea>
            </label>
            <button className="button primary" type="submit">Send message</button>
          </form>
        )}
      </div>
    </section>
  )
}
