import { useEffect } from 'react'

const SITE_URL = 'https://innosimdesignab.com'

function upsertMeta(key, value, keyType = 'name') {
  if (!value) return
  let el = document.head.querySelector(`meta[${keyType}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(keyType, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function upsertLink(rel, href) {
  if (!href) return
  let link = document.head.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export default function SEO({
  title = 'Innosim Design AB – Propeller Services',
  description = 'Propeller maintenance, repair, and field services with certified technicians and flexible support.',
  path = '/',
  image,
  type = 'website',
  structuredData,
}) {
  useEffect(() => {
    const fullUrl = `${SITE_URL}${path}`
    document.title = title

    upsertMeta('description', description, 'name')

    upsertMeta('og:title', title, 'property')
    upsertMeta('og:description', description, 'property')
    upsertMeta('og:type', type, 'property')
    upsertMeta('og:url', fullUrl, 'property')
    if (image) upsertMeta('og:image', image, 'property')

    upsertMeta('twitter:card', image ? 'summary_large_image' : 'summary', 'name')
    upsertMeta('twitter:title', title, 'name')
    upsertMeta('twitter:description', description, 'name')
    if (image) upsertMeta('twitter:image', image, 'name')

    upsertLink('canonical', fullUrl)

    let ldEl = document.getElementById('ld-json')
    if (structuredData) {
      if (!ldEl) {
        ldEl = document.createElement('script')
        ldEl.type = 'application/ld+json'
        ldEl.id = 'ld-json'
        document.head.appendChild(ldEl)
      }
      ldEl.textContent = JSON.stringify(structuredData)
    } else if (ldEl) {
      // Remove old structured data if not provided
      ldEl.parentNode.removeChild(ldEl)
    }
  }, [title, description, path, image, type, structuredData])

  return null
}
