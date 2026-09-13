import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import FAQAccordion from '@/components/FAQAccordion'
import { getNavItems, getSettings, getGlobal, getCollection } from '@/lib/data'

export default async function PreguntasFrecuentes() {
  const [navItems, settings, pageData, faqs] = await Promise.all([
    getNavItems(),
    getSettings(),
    getGlobal('faq-page'),
    getCollection('faqs', 'order'),
  ])

  const page = pageData || {}
  const faqList = faqs.map((doc: any) => ({
    question: doc.question,
    answer: typeof doc.answer === 'string' ? doc.answer : '',
  }))

  return (
    <>
      <Navigation items={navItems} />
      <main className="flex-1">
        <section className="bg-cream py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {page.title || 'Preguntas Frecuentes'}
            </h1>
            <p className="text-lg text-warm-gray text-center max-w-2xl mx-auto">
              {page.subtitle || 'Resolvemos tus dudas sobre el proceso terapéutico'}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <FAQAccordion faqs={faqList} />
          </div>
        </section>
      </main>
      <Footer />
      {settings.whatsapp && <WhatsAppButton phoneNumber={settings.whatsapp} />}
    </>
  )
}
