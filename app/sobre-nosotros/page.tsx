import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getNavItems, getSettings, getGlobal } from '@/lib/data'

export default async function SobreNosotros() {
  const [navItems, settings, about] = await Promise.all([
    getNavItems(),
    getSettings(),
    getGlobal('about'),
  ])

  const data = about || {}

  return (
    <>
      <Navigation items={navItems} />
      <main className="flex-1">
        <section className="bg-cream py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {data.title || 'Sobre Centro Selves'}
            </h1>
            <p className="text-lg text-warm-gray text-center max-w-2xl mx-auto">
              {data.subtitle || 'Psicoterapia Sistémico-Relacional'}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* About text */}
            {data.aboutText && (
              <div className="mb-12">
                {data.aboutText.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="text-warm-gray leading-relaxed mb-4 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Areas of support */}
            {data.approachText && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">{data.approachTitle || 'Áreas de acompañamiento'}</h2>
                <p className="text-warm-gray leading-relaxed mb-6">{data.approachText}</p>
                {data.audiences && data.audiences.length > 0 && (
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {data.audiences.map((item: any, i: number) => (
                      <div key={i} className="flex items-center gap-2 p-3 bg-cream rounded-lg">
                        <span className="w-2 h-2 rounded-full bg-sage flex-shrink-0"></span>
                        <span className="text-foreground text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Therapist section */}
            <div className="border-t border-cream-dark pt-12">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                  {data.therapistPhoto?.url ? (
                    <img
                      src={data.therapistPhoto.url}
                      alt={data.therapistName || 'Terapeuta'}
                      className="w-full rounded-lg shadow-md"
                    />
                  ) : (
                    <Image
                      src="/images/andres.png"
                      alt={data.therapistName || 'Andrés González Morales'}
                      width={400}
                      height={500}
                      className="w-full rounded-lg shadow-md object-cover"
                    />
                  )}
                </div>

                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-foreground mb-1">
                    {data.therapistName || 'Andrés González Morales'}
                  </h2>
                  <p className="text-sage mb-4">{data.therapistRole || 'Psicólogo clínico'}</p>

                  {data.credentials && data.credentials.length > 0 && (
                    <ul className="space-y-3 text-warm-gray">
                      {data.credentials.map((cred: any, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0"></span>
                          {cred.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Principles */}
            {data.principles && data.principles.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Principios</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.principles.map((p: any, i: number) => (
                    <div key={i} className="p-5 bg-cream rounded-lg">
                      <h3 className="font-semibold mb-1 text-foreground">{p.title}</h3>
                      <p className="text-sm text-warm-gray">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      {settings.whatsapp && <WhatsAppButton phoneNumber={settings.whatsapp} />}
    </>
  )
}
