import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Approvals from './pages/Approvals.jsx'
import Capability from './pages/Capability.jsx'
import About from './pages/About.jsx'
import Sustainability from './pages/Sustainability.jsx'
import SafetyPolicy from './pages/SafetyPolicy.jsx'
import Contact from './pages/Contact.jsx'
import SpareParts from './pages/SpareParts.jsx'
import FullMRO from './pages/FullMRO.jsx'
import FieldServices from './pages/FieldServices.jsx'

function App() {
  useEffect(() => {
    function isDownloadLink(a) {
      if (!a) return false
      // attribute-based
      if (a.hasAttribute('download')) return true
      const href = (a.getAttribute('href') || '').trim()
      // extension-based
      if (/\.(pdf|docx?|xlsx?|zip)$/i.test(href)) return true
      // text-based heuristic
      const text = (a.textContent || '').toLowerCase()
      if (text.includes('download')) return true
      if (text.includes('pdf')) return true
      return false
    }

    const handler = (e) => {
      const target = e.target
      const anchor = target.closest ? target.closest('a') : null
      if (!anchor) return
      if (isDownloadLink(anchor)) {
        e.preventDefault()
        alert('Download failed. Please try again later.')
      }
    }

    // capture phase to ensure we intercept early
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Canonical slugs to match reference */}
          <Route path="/approvals-and-certificates" element={<Approvals />} />
          <Route path="/capability-list" element={<Capability />} />
          <Route path="/our-services/spare-parts" element={<SpareParts />} />
          <Route path="/our-services/full-mro-capability" element={<FullMRO />} />
          <Route path="/our-services/field-services" element={<FieldServices />} />
          {/* Backward-compat */}
          <Route path="/approvals" element={<Navigate to="/approvals-and-certificates" replace />} />
          <Route path="/capability" element={<Navigate to="/capability-list" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/safety-policy" element={<SafetyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
