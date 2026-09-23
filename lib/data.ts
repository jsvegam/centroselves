import { getPayloadClient } from './payload'

const defaultNav = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Centro Selves', href: '/sobre-nosotros' },
  { label: 'Atención Psicológica', href: '/servicios' },
  { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
  { label: 'Contacto', href: '/contacto' },
]

const defaultSettings = {
  siteName: 'Centro Selves',
  whatsapp: '56988841961',
  instagram: '@centro.selves',
  email: '',
  phone: '+56 9 8884 1961',
  address: '',
  mapUrl: '',
}

export async function getNavItems() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'nav-items',
      sort: 'order',
      where: { visible: { equals: true } },
    })
    if (result.docs.length > 0) {
      return result.docs.map((doc: any) => ({
        label: doc.label,
        href: doc.href,
      }))
    }
  } catch {}
  return defaultNav
}

export async function getSettings() {
  try {
    const payload = await getPayloadClient()
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    return { ...defaultSettings, ...settings }
  } catch {}
  return defaultSettings
}

export async function getGlobal(slug: string): Promise<any> {
  try {
    const payload = await getPayloadClient()
    return await payload.findGlobal({ slug })
  } catch {}
  return null
}

export async function getCollection(slug: string, sort = 'order'): Promise<any[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({ collection: slug, sort })
    return result.docs
  } catch {}
  return []
}
