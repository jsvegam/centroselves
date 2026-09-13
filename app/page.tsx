import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getNavItems, getSettings, getGlobal } from '@/lib/data'

export default async function Home() {
  const [navItems, settings, homePage] = await Promise.all([
    getNavItems(),
    getSettings(),
    getGlobal('home-page'),
  ])

  const hero = homePage || {}

  return (
    <>
      <Navigation items={navItems} />
      <main className="flex-1">
        {/* Hero Section with office background */}
        <section className="relative min-h-[70vh] flex items-center">
          <Image
            src="/images/consulta.png"
            alt="Espacio de atención Centro Selves"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {hero.heroTitle || 'Centro Selves'}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                {hero.heroSubtitle || 'Psicoterapia Sistémica Relacional'}
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {hero.heroDescription || 'Atención psicológica a adultos, parejas y familias desde una perspectiva sistémico-relacional.'}
              </p>
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sage text-white px-8 py-3 rounded-md hover:bg-sage-dark transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                </svg>
                {hero.ctaText || 'Agendar una hora'}
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cream py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{hero.faqCtaTitle || '¿Tienes dudas?'}</h2>
            <p className="text-warm-gray mb-8 max-w-xl mx-auto">
              {hero.faqCtaDescription || 'Revisa las preguntas frecuentes o contáctame directamente'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/preguntas-frecuentes"
                className="inline-block border border-sage text-sage px-8 py-3 rounded-md hover:bg-sage hover:text-white transition-colors"
              >
                Ver Preguntas Frecuentes
              </Link>
              <Link
                href="/contacto"
                className="inline-block bg-sage text-white px-8 py-3 rounded-md hover:bg-sage-dark transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {settings.whatsapp && <WhatsAppButton phoneNumber={settings.whatsapp} />}
    </>
  )
}
