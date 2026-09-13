import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceCards from '@/components/ServiceCards'
import { getNavItems, getSettings, getGlobal, getCollection } from '@/lib/data'

export default async function Servicios() {
  const [navItems, settings, pageData, services] = await Promise.all([
    getNavItems(),
    getSettings(),
    getGlobal('services-page'),
    getCollection('services', 'order'),
  ])

  const page = pageData || {}

  return (
    <>
      <Navigation items={navItems} />
      <main className="flex-1">
        <section className="bg-cream py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {page.title || 'Atención Psicológica'}
            </h1>
            <p className="text-lg text-warm-gray text-center max-w-2xl mx-auto">
              {page.subtitle || 'Psicoterapia individual, de pareja y familiar'}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <ServiceCards services={services} />

            {page.infoItems && page.infoItems.length > 0 && (
              <div className="mt-12 bg-cream rounded-lg p-8">
                <h2 className="text-xl font-bold mb-4">Información importante</h2>
                <ul className="space-y-3 text-warm-gray">
                  {page.infoItems.map((item: any, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0"></span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12 text-center">
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sage text-white px-8 py-3 rounded-md hover:bg-sage-dark transition-colors"
              >
                {page.ctaText || 'Consultar disponibilidad'}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {settings.whatsapp && <WhatsAppButton phoneNumber={settings.whatsapp} />}
    </>
  )
}
