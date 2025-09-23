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

        <div className="contact-layout">
          <div className="contact-details">
            <img
              src="/malmorairport.jpg"
              alt="Malmö Airport hangar area"
              className="contact-image"
            />
            <div className="contact-card">
              <h3>Malmö Airport</h3>
              <p>
                Hangar<br/>
                Hangarvägen 4<br/>
                Box 57<br/>
                239 32 Malmö‑Sturup
              </p>
            </div>
            <div className="contact-card">
              <h3>Contact person</h3>
              <p>
                Ludvig Odin — Technical & Asset Manager<br/>
                <a className="link" href="mailto:ludvig.odin@innosim.com">ludvig.odin@innosim.com</a><br/>
                +46 768 67 01 45
              </p>
            </div>
          </div>

          <div>
            <h2 style={{marginTop:0}}>Send us a message</h2>
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
        </div>
      </div>
    </section>
  )
}
